"use client";
import { useState, useEffect } from "react";

function getToken() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("adminToken");
  }
  return null;
}

export default function AdminLogin() {
  // Alle useState und useEffect Hooks am Anfang!
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState(getToken());
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", image: "", link: "", tags: "" });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showTab, setShowTab] = useState("projects");
  const [contacts, setContacts] = useState([]);
  const [contactsLoading, setContactsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [skills, setSkills] = useState([]);
  const [skillsLoading, setSkillsLoading] = useState(false);
  const [skillForm, setSkillForm] = useState({ name: "", percent: "", category: "", icon: null });
  const [skillEditId, setSkillEditId] = useState(null);
  const [skillError, setSkillError] = useState("");
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);
  const [expForm, setExpForm] = useState({ dateFrom: "", dateTo: "", title: "", company: "", description: [""] });
  const [expEditId, setExpEditId] = useState(null);
  const [eduForm, setEduForm] = useState({ date: "", title: "", company: "" });
  const [eduEditId, setEduEditId] = useState(null);
  const [cvLoading, setCvLoading] = useState(false);
  const [cvError, setCvError] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [profileLoading, setProfileLoading] = useState(false);
  const [profileError, setProfileError] = useState("");
  const [cvStats, setCvStats] = useState([]);
  const [cvStatsLoading, setCvStatsLoading] = useState(false);
  const [figmaUploadMsg, setFigmaUploadMsg] = useState("");
  const [figmaUploadStatus, setFigmaUploadStatus] = useState(null); // 'success' | 'error' | null
  const [allCategories, setAllCategories] = useState(["UI/UX", "Branding", "App", "Webseite"]);
  const [newCategory, setNewCategory] = useState("");

  useEffect(() => { setIsMounted(true); }, []);
  useEffect(() => {
    if (token) fetchProjects();
    // eslint-disable-next-line
  }, [token]);
  useEffect(() => {
    if (token && showTab === "contacts") fetchContacts();
    // eslint-disable-next-line
  }, [token, showTab]);
  useEffect(() => {
    if (token && showTab === "skillset") fetchSkills();
  }, [token, showTab]);
  useEffect(() => {
    if (token && showTab === "cv") fetchCV();
  }, [token, showTab]);
  useEffect(() => {
    if (token && showTab === "profile") fetchProfileImage();
  }, [token, showTab]);
  useEffect(() => {
    if (token && showTab === "cvstats") fetchCvStats();
  }, [token, showTab]);

  if (!isMounted) return null;

  // Projekte laden
  async function fetchProjects() {
    setLoading(true);
    const res = await fetch("http://localhost:5000/api/projects");
    const data = await res.json();
    setProjects(data);
    setLoading(false);
  }

  // Kontaktanfragen laden
  async function fetchContacts() {
    setContactsLoading(true);
    const res = await fetch("http://localhost:5000/api/contact", {
      headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` },
    });
    if (res.ok) {
      setContacts(await res.json());
    }
    setContactsLoading(false);
  }

  async function fetchSkills() {
    setSkillsLoading(true);
    const res = await fetch("http://localhost:5000/api/skills");
    if (res.ok) setSkills(await res.json());
    setSkillsLoading(false);
  }

  async function fetchCV() {
    setCvLoading(true);
    const [expRes, eduRes] = await Promise.all([
      fetch("http://localhost:5000/api/experience"),
      fetch("http://localhost:5000/api/education")
    ]);
    setExperiences(expRes.ok ? await expRes.json() : []);
    setEducation(eduRes.ok ? await eduRes.json() : []);
    setCvLoading(false);
  }

  async function fetchProfileImage() {
    setProfileLoading(true);
    setProfileError("");
    try {
      const res = await fetch("/api/profile-image");
      const data = await res.json();
      setProfileImage(data.image);
    } catch {
      setProfileError("Profilbild konnte nicht geladen werden.");
    }
    setProfileLoading(false);
  }

  async function handleProfileUpload(e) {
    setProfileError("");
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setProfileError("Nur Bilddateien erlaubt.");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setProfileError("Maximal 2MB erlaubt.");
      return;
    }
    setProfileLoading(true);
    const formData = new FormData();
    formData.append("image", file);
    const res = await fetch("/api/profile-image", {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      const data = await res.json();
      setProfileImage(data.image);
      fetchProfileImage();
    } else {
      setProfileError("Fehler beim Hochladen.");
    }
    setProfileLoading(false);
  }

  // Login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.ok && data.token) {
        setToken(data.token);
        localStorage.setItem("adminToken", data.token);
      } else {
        setError(data.message || "Login fehlgeschlagen");
      }
    } catch (err) {
      setError("Serverfehler");
    }
  };

  // Projekt anlegen/aktualisieren
  async function handleProjectSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const method = editId ? "PUT" : "POST";
    const url = editId
      ? `http://localhost:5000/api/projects/${editId}`
      : "http://localhost:5000/api/projects";
    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...form,
        tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
        categories: form.categories || [],
      }),
    });
    if (res.ok) {
      const data = await res.json();
      setForm({ title: "", description: "", image: "", link: "", tags: "" });
      setEditId(data._id); // Nach dem Anlegen direkt das neue Projekt auswählen
      fetchProjects();
    } else {
      const data = await res.json();
      setError(data.message || "Fehler beim Speichern");
    }
    setLoading(false);
  }

  // Projekt löschen
  async function handleDelete(id) {
    if (!window.confirm("Wirklich löschen?")) return;
    setLoading(true);
    const res = await fetch(`http://localhost:5000/api/projects/${id}`, {
      method: "DELETE",
      // Kein Authorization-Header mehr
    });
    if (res.ok) fetchProjects();
    setLoading(false);
  }

  // Projekt zum Bearbeiten laden
  function handleEdit(p) {
    setForm({
      title: p.title,
      description: p.description,
      image: p.image || "",
      link: p.link || "",
      tags: (p.tags || []).join(", "),
      categories: p.categories || [],
    });
    setEditId(p._id);
  }

  // Logout
  async function handleLogout() {
    const token = localStorage.getItem("adminToken");
    if (token) {
      await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
    }
    localStorage.removeItem("adminToken");
    setToken(null);
    setProjects([]);
  }

  async function handleDeleteContact(id) {
    if (!window.confirm("Wirklich löschen?")) return;
    setContactsLoading(true);
    const res = await fetch(`http://localhost:5000/api/contact/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` },
    });
    if (res.ok) fetchContacts();
    setContactsLoading(false);
  }

  async function handleSkillSubmit(e) {
    e.preventDefault();
    setSkillError("");
    const formData = new FormData();
    formData.append("name", skillForm.name);
    formData.append("percent", skillForm.percent);
    formData.append("category", skillForm.category);
    if (skillForm.icon instanceof File) formData.append("icon", skillForm.icon);
    const method = skillEditId ? "PUT" : "POST";
    const url = skillEditId
      ? `http://localhost:5000/api/skills/${skillEditId}`
      : "http://localhost:5000/api/skills";
    const res = await fetch(url, {
      method,
      body: formData,
    });
    if (res.ok) {
      setSkillForm({ name: "", percent: "", category: "", icon: null });
      setSkillEditId(null);
      fetchSkills();
      window.location.reload(); // Seite neu laden, damit das Frontend die aktuellen Skills anzeigt
    } else {
      const data = await res.json();
      setSkillError(data.message || "Fehler beim Speichern");
    }
  }

  function handleSkillEdit(skill) {
    setSkillForm({ name: skill.name, percent: skill.percent, category: skill.category, icon: skill.icon });
    setSkillEditId(skill._id);
  }

  async function handleSkillDelete(id) {
    if (!window.confirm("Wirklich löschen?")) return;
    setSkillsLoading(true);
    const res = await fetch(`http://localhost:5000/api/skills/${id}`, { method: "DELETE" });
    if (res.ok) fetchSkills();
    setSkillsLoading(false);
    window.location.reload(); // Nach Löschen auch reload
  }

  function handleExpDescChange(idx, value) {
    setExpForm(f => ({
      ...f,
      description: f.description.map((d, i) => i === idx ? value : d)
    }));
  }
  function handleExpDescAdd() {
    setExpForm(f => ({ ...f, description: [...f.description, ""] }));
  }
  function handleExpDescRemove(idx) {
    setExpForm(f => ({ ...f, description: f.description.filter((_, i) => i !== idx) }));
  }

  async function handleExpSubmit(e) {
    e.preventDefault();
    setCvError("");
    const date = expForm.dateFrom && expForm.dateTo ? `${expForm.dateFrom} – ${expForm.dateTo}` : expForm.dateFrom || "";
    const method = expEditId ? "PUT" : "POST";
    const url = expEditId
      ? `http://localhost:5000/api/experience/${expEditId}`
      : "http://localhost:5000/api/experience";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...expForm, date, description: expForm.description.filter(Boolean) })
    });
    if (res.ok) {
      setExpForm({ dateFrom: "", dateTo: "", title: "", company: "", description: [""] });
      setExpEditId(null);
      fetchCV();
    } else {
      const data = await res.json();
      setCvError(data.message || "Fehler beim Speichern");
    }
  }

  function handleExpEdit(exp) {
    // Splitte Zeitraum in von/bis, falls möglich
    let dateFrom = "", dateTo = "";
    if (exp.date && exp.date.includes("–")) {
      [dateFrom, dateTo] = exp.date.split("–").map(s => s.trim());
    } else {
      dateFrom = exp.date || "";
    }
    setExpForm({
      dateFrom,
      dateTo,
      title: exp.title,
      company: exp.company,
      description: Array.isArray(exp.description) ? exp.description : [exp.description || ""]
    });
    setExpEditId(exp._id);
  }

  async function handleExpDelete(id) {
    if (!window.confirm("Wirklich löschen?")) return;
    setCvLoading(true);
    await fetch(`http://localhost:5000/api/experience/${id}`, { method: "DELETE" });
    fetchCV();
    setCvLoading(false);
  }

  async function handleEduSubmit(e) {
    e.preventDefault();
    setCvError("");
    const method = eduEditId ? "PUT" : "POST";
    const url = eduEditId
      ? `http://localhost:5000/api/education/${eduEditId}`
      : "http://localhost:5000/api/education";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eduForm)
    });
    if (res.ok) {
      setEduForm({ date: "", title: "", company: "" });
      setEduEditId(null);
      fetchCV();
    } else {
      const data = await res.json();
      setCvError(data.message || "Fehler beim Speichern");
    }
  }

  function handleEduEdit(edu) {
    setEduForm(edu);
    setEduEditId(edu._id);
  }

  async function handleEduDelete(id) {
    if (!window.confirm("Wirklich löschen?")) return;
    setCvLoading(true);
    await fetch(`http://localhost:5000/api/education/${id}`, { method: "DELETE" });
    fetchCV();
    setCvLoading(false);
  }

  async function fetchCvStats() {
    setCvStatsLoading(true);
    const res = await fetch("http://localhost:5000/api/cv-download-stats");
    if (res.ok) setCvStats(await res.json());
    setCvStatsLoading(false);
  }

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2A1454] to-[#8750F7]">
        <form onSubmit={handleSubmit} className="bg-[#18122B] p-8 rounded-xl shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
          <input
            type="text"
            placeholder="Benutzername"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="w-full mb-4 px-4 py-2 rounded bg-[#2A1454] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            autoFocus
          />
          <input
            type="password"
            placeholder="Passwort"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full mb-4 px-4 py-2 rounded bg-[#2A1454] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {error && <div className="text-red-400 mb-4 text-center">{error}</div>}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#8750F7] to-[#2A1454] py-2 rounded font-semibold hover:opacity-90 transition"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2A1454] to-[#8750F7] text-white p-4 pt-24">
      <div className="max-w-3xl mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin-Panel: Projekte</h1>
          <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">Logout</button>
        </div>
        <div className="flex gap-4 mb-8">
          <button onClick={() => setShowTab("projects")}
            className={`px-4 py-2 rounded font-semibold ${showTab === "projects" ? "bg-purple-700 text-white" : "bg-[#18122B] text-purple-200"}`}>Projekte</button>
          <button onClick={() => setShowTab("contacts")}
            className={`px-4 py-2 rounded font-semibold ${showTab === "contacts" ? "bg-purple-700 text-white" : "bg-[#18122B] text-purple-200"}`}>Kontaktanfragen</button>
          <button onClick={() => setShowTab("skillset")}
            className={`px-4 py-2 rounded font-semibold ${showTab === "skillset" ? "bg-purple-700 text-white" : "bg-[#18122B] text-purple-200"}`}>Skillset</button>
          <button onClick={() => setShowTab("cv")}
            className={`px-4 py-2 rounded font-semibold ${showTab === "cv" ? "bg-purple-700 text-white" : "bg-[#18122B] text-purple-200"}`}>Lebenslauf</button>
          <button onClick={() => setShowTab("profile")}
            className={`px-4 py-2 rounded font-semibold ${showTab === "profile" ? "bg-purple-700 text-white" : "bg-[#18122B] text-purple-200"}`}>Profilbild</button>
          <button onClick={() => setShowTab("cvstats")}
            className={`px-4 py-2 rounded font-semibold ${showTab === "cvstats" ? "bg-purple-700 text-white" : "bg-[#18122B] text-purple-200"}`}>CV-Downloads</button>
        </div>
        <div>
          {showTab === "projects" && (
            <>
              <form onSubmit={handleProjectSubmit} className="bg-[#18122B] p-6 rounded-xl shadow mb-8 flex flex-col gap-4">
                <h2 className="text-xl font-semibold mb-2">{editId ? "Projekt bearbeiten" : "Neues Projekt anlegen"}</h2>
                <input
                  type="text"
                  placeholder="Titel"
                  value={form.title}
                  onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                  className="px-4 py-2 rounded bg-[#2A1454] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <textarea
                  placeholder="Beschreibung"
                  value={form.description}
                  onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                  className="px-4 py-2 rounded bg-[#2A1454] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Bild-URL (optional)"
                  value={form.image}
                  onChange={e => setForm(f => ({ ...f, image: e.target.value }))}
                  className="px-4 py-2 rounded bg-[#2A1454] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="text"
                  placeholder="Projekt-Link (optional)"
                  value={form.link}
                  onChange={e => setForm(f => ({ ...f, link: e.target.value }))}
                  className="px-4 py-2 rounded bg-[#2A1454] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="text"
                  placeholder="Tags (Komma-getrennt)"
                  value={form.tags}
                  onChange={e => setForm(f => ({ ...f, tags: e.target.value }))}
                  className="px-4 py-2 rounded bg-[#2A1454] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                {/* Figma-Link statt Upload */}
                <label htmlFor="figmaLink" className="text-sm text-purple-200 mt-2">Figma-Download-Link</label>
                <input
                  id="figmaLink"
                  type="url"
                  placeholder="https://www.figma.com/file/..."
                  value={form.figmaFile || ''}
                  onChange={e => setForm(f => ({ ...f, figmaFile: e.target.value }))}
                  className="px-4 py-2 rounded bg-[#2A1454] text-white focus:outline-none focus:ring-2 focus:ring-purple-500 mt-1 mb-2"
                />
                {form.figmaFile && (
                  <a href={form.figmaFile} target="_blank" rel="noopener noreferrer" className="underline text-purple-400 block mb-2">Figma-Link öffnen</a>
                )}
                {/* Kategorien-Checkboxen */}
                <label className="text-sm text-purple-200 mt-2">Kategorien</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {allCategories.map(cat => (
                    <label key={cat} className="flex items-center gap-1 text-purple-100 text-sm bg-[#2A1454] px-2 py-1 rounded">
                      <input
                        type="checkbox"
                        checked={form.categories?.includes(cat) || false}
                        onChange={e => {
                          if (e.target.checked) {
                            setForm(f => ({ ...f, categories: [...(f.categories || []), cat] }));
                          } else {
                            setForm(f => ({ ...f, categories: (f.categories || []).filter(c => c !== cat) }));
                          }
                        }}
                      />
                      {cat}
                    </label>
                  ))}
                </div>
                <div className="flex gap-2 mb-4">
                  <input
                    type="text"
                    placeholder="Neue Kategorie"
                    value={newCategory}
                    onChange={e => setNewCategory(e.target.value)}
                    className="px-2 py-1 rounded bg-[#2A1454] text-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                  />
                  <button type="button" onClick={() => {
                    if (newCategory && !allCategories.includes(newCategory)) {
                      setAllCategories([...allCategories, newCategory]);
                      setForm(f => ({ ...f, categories: [...(f.categories || []), newCategory] }));
                      setNewCategory("");
                    }
                  }} className="bg-purple-600 text-white px-3 py-1 rounded text-sm">Hinzufügen</button>
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#8750F7] to-[#2A1454] py-2 rounded font-semibold hover:opacity-90 transition"
                  disabled={loading}
                >
                  {editId ? "Speichern" : "Anlegen"}
                </button>
                {editId && (
                  <button type="button" onClick={() => { setEditId(null); setForm({ title: "", description: "", image: "", link: "", tags: "" }); }} className="text-sm text-purple-300 underline mt-2">Abbrechen</button>
                )}
                {error && <div className="text-red-400 text-center">{error}</div>}
              </form>
              <h2 className="text-xl font-semibold mb-4">Alle Projekte</h2>
              {loading ? <div>Lade...</div> : (
                <div className="grid gap-6">
                  {projects.map(p => (
                    <div key={p._id} className="bg-[#18122B] rounded-xl shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <div className="font-bold text-lg mb-1">{p.title}</div>
                        <div className="text-sm text-gray-300 mb-2">{p.description}</div>
                        {p.image && <img src={p.image} alt="Bild" className="w-32 h-20 object-cover rounded mb-2" />}
                        {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-purple-300 underline">Zum Projekt</a>}
                        {p.tags && p.tags.length > 0 && (
                          <div className="mt-2 text-xs text-purple-200">Tags: {p.tags.join(", ")}</div>
                        )}
                      </div>
                      <div className="flex gap-2 mt-2 md:mt-0">
                        <button onClick={() => handleEdit(p)} className="bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-600 text-black font-semibold">Bearbeiten</button>
                        <button onClick={() => handleDelete(p._id)} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 font-semibold">Löschen</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
          {showTab === "contacts" && (
            <div className="bg-[#18122B] p-6 rounded-xl shadow">
              <h2 className="text-xl font-semibold mb-4">Kontaktanfragen</h2>
              {contactsLoading ? <div>Lade...</div> : contacts.length === 0 ? <div>Keine Anfragen vorhanden.</div> : (
                <div className="flex flex-col gap-4">
                  {contacts.map(c => (
                    <div key={c._id} className="border-b border-purple-900 pb-3 mb-3 flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <div className="font-bold text-lg">{c.name}</div>
                        <div className="text-purple-200 text-sm">{c.email}</div>
                        <div className="text-gray-300 mt-1 text-sm">{c.message}</div>
                        <div className="text-xs text-gray-500 mt-1">{new Date(c.createdAt).toLocaleString()}</div>
                        <a href={`mailto:${c.email}?subject=Antwort auf deine Kontaktanfrage`} className="text-blue-400 underline mt-2 inline-block">Antworten</a>
                      </div>
                      <button onClick={() => handleDeleteContact(c._id)} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 font-semibold mt-2 md:mt-0">Löschen</button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          {showTab === "skillset" && (
            <div className="bg-[#18122B] p-6 rounded-xl shadow mb-8">
              <h2 className="text-xl font-semibold mb-2">{skillEditId ? "Skill bearbeiten" : "Neuen Skill anlegen"}</h2>
              <form onSubmit={handleSkillSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={skillForm.name}
                  onChange={e => setSkillForm(f => ({ ...f, name: e.target.value }))}
                  className="px-4 py-2 rounded bg-[#2A1454] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <input
                  type="number"
                  placeholder="Prozent (0-100)"
                  value={skillForm.percent}
                  min={0}
                  max={100}
                  onChange={e => setSkillForm(f => ({ ...f, percent: e.target.value }))}
                  className="px-4 py-2 rounded bg-[#2A1454] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Kategorie (z.B. Frontend, Backend, Design)"
                  value={skillForm.category}
                  onChange={e => setSkillForm(f => ({ ...f, category: e.target.value }))}
                  className="px-4 py-2 rounded bg-[#2A1454] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={e => setSkillForm(f => ({ ...f, icon: e.target.files[0] }))}
                  className="text-white"
                />
                {skillForm.icon && typeof skillForm.icon === 'string' && (
                  <img src={skillForm.icon} alt="Icon" className="w-12 h-12 object-contain" />
                )}
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#8750F7] to-[#2A1454] py-2 rounded font-semibold hover:opacity-90 transition"
                  disabled={skillsLoading}
                >
                  {skillEditId ? "Speichern" : "Anlegen"}
                </button>
                {skillEditId && (
                  <button type="button" onClick={() => { setSkillEditId(null); setSkillForm({ name: "", percent: "", category: "", icon: null }); }} className="text-sm text-purple-300 underline mt-2">Abbrechen</button>
                )}
                {skillError && <div className="text-red-400 text-center">{skillError}</div>}
              </form>
            </div>
          )}
          {showTab === "skillset" && (
            <div className="bg-[#18122B] p-6 rounded-xl shadow">
              <h2 className="text-xl font-semibold mb-4">Alle Skills</h2>
              {skillsLoading ? <div>Lade...</div> : skills.length === 0 ? <div>Keine Skills vorhanden.</div> : (
                <div className="grid gap-6">
                  {skills.map(skill => (
                    <div key={skill._id} className="bg-[#23203A] rounded-xl shadow p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <img src={skill.icon} alt="Icon" className="w-12 h-12 object-contain rounded" />
                        <div>
                          <div className="font-bold text-lg mb-1">{skill.name}</div>
                          <div className="text-sm text-gray-300 mb-1">{skill.category}</div>
                          <div className="text-purple-300 font-bold">{skill.percent}%</div>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-2 md:mt-0">
                        <button onClick={() => handleSkillEdit(skill)} className="bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-600 text-black font-semibold">Bearbeiten</button>
                        <button onClick={() => handleSkillDelete(skill._id)} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 font-semibold">Löschen</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          {showTab === "cv" && (
            <div className="bg-[#18122B] p-6 rounded-xl shadow mb-8">
              <h2 className="text-xl font-semibold mb-4">Berufserfahrung</h2>
              <form onSubmit={handleExpSubmit} className="flex flex-col gap-4 mb-6">
                <div className="flex gap-2">
                  <input type="text" placeholder="Von (z.B. 10/2023)" value={expForm.dateFrom} onChange={e => setExpForm(f => ({ ...f, dateFrom: e.target.value }))} className="flex-1 px-4 py-2 rounded bg-[#2A1454] text-white focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                  <input type="text" placeholder="Bis (z.B. 01/2024 oder Dato)" value={expForm.dateTo} onChange={e => setExpForm(f => ({ ...f, dateTo: e.target.value }))} className="flex-1 px-4 py-2 rounded bg-[#2A1454] text-white focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                </div>
                <input type="text" placeholder="Titel" value={expForm.title} onChange={e => setExpForm(f => ({ ...f, title: e.target.value }))} className="px-4 py-2 rounded bg-[#2A1454] text-white focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                <input type="text" placeholder="Firma" value={expForm.company} onChange={e => setExpForm(f => ({ ...f, company: e.target.value }))} className="px-4 py-2 rounded bg-[#2A1454] text-white focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-purple-200 mb-1">Beschreibung (jeder Punkt einzeln):</label>
                  {expForm.description.map((desc, idx) => (
                    <div key={idx} className="flex gap-2 items-center">
                      <input
                        type="text"
                        value={desc}
                        onChange={e => handleExpDescChange(idx, e.target.value)}
                        className="flex-1 px-4 py-2 rounded bg-[#2A1454] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                      />
                      <button type="button" onClick={() => handleExpDescRemove(idx)} className="bg-red-500 px-2 py-1 rounded text-white font-bold text-lg leading-none">–</button>
                      {idx === expForm.description.length - 1 && (
                        <button type="button" onClick={handleExpDescAdd} className="bg-green-500 px-2 py-1 rounded text-white font-bold text-lg leading-none">+</button>
                      )}
                    </div>
                  ))}
                </div>
                <button type="submit" className="bg-gradient-to-r from-[#8750F7] to-[#2A1454] py-2 rounded font-semibold hover:opacity-90 transition">{expEditId ? "Speichern" : "Anlegen"}</button>
                {expEditId && <button type="button" onClick={() => { setExpEditId(null); setExpForm({ dateFrom: "", dateTo: "", title: "", company: "", description: [""] }); }} className="text-sm text-purple-300 underline mt-2">Abbrechen</button>}
              </form>
              <h3 className="text-lg font-semibold mb-2">Alle Einträge</h3>
              {cvLoading ? <div>Lade...</div> : experiences.length === 0 ? <div>Keine Einträge vorhanden.</div> : (
                <div className="grid gap-6">
                  {experiences.map(exp => (
                    <div key={exp._id} className="bg-[#23203A] rounded-xl shadow p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <div className="font-bold text-md mb-1 text-purple-300">{exp.date}</div>
                        <div className="font-bold text-lg mb-1">{exp.title}</div>
                        <div className="font-semibold text-white mb-1">{exp.company}</div>
                        <ul className="list-disc ml-6 text-gray-300 text-sm">
                          {(exp.description || []).map((d, i) => <li key={i}>{d}</li>)}
                        </ul>
                      </div>
                      <div className="flex gap-2 mt-2 md:mt-0">
                        <button onClick={() => handleExpEdit(exp)} className="bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-600 text-black font-semibold">Bearbeiten</button>
                        <button onClick={() => handleExpDelete(exp._id)} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 font-semibold">Löschen</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <h2 className="text-xl font-semibold mb-4 mt-10">Ausbildung</h2>
              <form onSubmit={handleEduSubmit} className="flex flex-col gap-4 mb-6">
                <input type="text" placeholder="Zeitraum (z.B. 09/2018 – 05/2022)" value={eduForm.date} onChange={e => setEduForm(f => ({ ...f, date: e.target.value }))} className="px-4 py-2 rounded bg-[#2A1454] text-white focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                <input type="text" placeholder="Titel" value={eduForm.title} onChange={e => setEduForm(f => ({ ...f, title: e.target.value }))} className="px-4 py-2 rounded bg-[#2A1454] text-white focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                <input type="text" placeholder="Institution" value={eduForm.company} onChange={e => setEduForm(f => ({ ...f, company: e.target.value }))} className="px-4 py-2 rounded bg-[#2A1454] text-white focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                <button type="submit" className="bg-gradient-to-r from-[#8750F7] to-[#2A1454] py-2 rounded font-semibold hover:opacity-90 transition">{eduEditId ? "Speichern" : "Anlegen"}</button>
                {eduEditId && <button type="button" onClick={() => { setEduEditId(null); setEduForm({ date: "", title: "", company: "" }); }} className="text-sm text-purple-300 underline mt-2">Abbrechen</button>}
              </form>
              <h3 className="text-lg font-semibold mb-2">Alle Einträge</h3>
              {cvLoading ? <div>Lade...</div> : education.length === 0 ? <div>Keine Einträge vorhanden.</div> : (
                <div className="grid gap-6">
                  {education.map(edu => (
                    <div key={edu._id} className="bg-[#23203A] rounded-xl shadow p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <div className="font-bold text-md mb-1 text-purple-300">{edu.date}</div>
                        <div className="font-bold text-lg mb-1">{edu.title}</div>
                        <div className="font-semibold text-white mb-1">{edu.company}</div>
                      </div>
                      <div className="flex gap-2 mt-2 md:mt-0">
                        <button onClick={() => handleEduEdit(edu)} className="bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-600 text-black font-semibold">Bearbeiten</button>
                        <button onClick={() => handleEduDelete(edu._id)} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 font-semibold">Löschen</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {cvError && <div className="text-red-400 text-center mt-4">{cvError}</div>}
            </div>
          )}
          {showTab === "profile" && (
            <div className="bg-[#18122B] p-6 rounded-xl shadow mb-8 flex flex-col items-center">
              <h2 className="text-xl font-semibold mb-4">Profilbild</h2>
              {profileLoading ? <div className="text-purple-400">Lade...</div> : profileImage ? (
                <img src={profileImage} alt="Profilbild" className="w-40 h-40 rounded-full object-cover border-4 border-purple-500 shadow mb-4" />
              ) : (
                <div className="w-40 h-40 rounded-full bg-[#2A1454] flex items-center justify-center text-purple-300 mb-4">Kein Bild</div>
              )}
              <input type="file" accept="image/*" onChange={handleProfileUpload} className="mb-2" />
              {profileError && <div className="text-red-400 text-center mt-2">{profileError}</div>}
              <div className="text-xs text-gray-400 mt-2">Erlaubt: JPG, PNG, max. 2MB</div>
            </div>
          )}
          {showTab === "cvstats" && (
            <div className="bg-[#18122B] p-6 rounded-xl shadow">
              <h2 className="text-xl font-semibold mb-4">CV-Download-Statistik</h2>
              {cvStatsLoading ? <div>Lade...</div> : cvStats.length === 0 ? <div>Keine Anfragen vorhanden.</div> : (
                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs text-left">
                    <thead>
                      <tr className="text-purple-300 border-b border-purple-800">
                        <th className="py-2 pr-4">E-Mail</th>
                        <th className="py-2 pr-4">Typ</th>
                        <th className="py-2 pr-4">Status</th>
                        <th className="py-2 pr-4">Angelegt</th>
                        <th className="py-2 pr-4">Ablauf</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cvStats.map((s, i) => (
                        <tr key={i} className="border-b border-purple-900">
                          <td className="py-1 pr-4">{s.email}</td>
                          <td className="py-1 pr-4">{s.type}</td>
                          <td className="py-1 pr-4">{s.used ? "verbraucht" : "offen"}</td>
                          <td className="py-1 pr-4">{new Date(s.createdAt).toLocaleString()}</td>
                          <td className="py-1 pr-4">{new Date(s.expiresAt).toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 