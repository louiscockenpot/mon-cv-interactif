import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, 
  User, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Cpu, 
  Send, 
  MapPin, 
  Mail, 
  Linkedin, 
  ExternalLink, 
  Brain, 
  Database, 
  ChevronRight,
  Menu,
  X,
  Settings,
  Key,
  AlertTriangle,
  Sparkles
} from 'lucide-react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell
} from 'recharts';

const REPO_NAME = "/mon-cv-interactif"; 
const PROFILE_PIC_URL = `${REPO_NAME}/louiscockenpot.png`;

// --- BASE DE CONNAISSANCES (KNOWLEDGE BASE) ---
const INITIAL_CONTEXT = `
PROFIL CANDIDAT:
Nom: Louis Cockenpot
Titre: Data & AI Engineer
Email: louiscockenpot27@gmail.com
Téléphone: +33 6 59 40 99 56
Localisation: Paris, France
LinkedIn: linkedin.com/in/louiscockenpot
Langues: Français (Maternel), Anglais (C1 - TOEIC 975/990), Espagnol (A2)

RESUME OBJECTIF:
Diplômé d'un Master 2 en Data et Intelligence Artificielle (ESILV, UCLA), je souhaite mettre mes compétences en analyse statistique et en machine learning au service de projets innovants et à fort impact.

FORMATIONS:
1. ESILV (École Supérieure d'Ingénieurs Léonard de Vinci), La Défense (09/20-08/25)
   - Master en Data et Intelligence Artificielle
   - Cours: Mathématiques, Explainable AI, Neural Networks, MLOps, Data Analysis, Statistics, SQL, SCRUM.
2. UCLA Extension (University of California Los Angeles), Certificate in Data Science (09/24-03/25)
   - GPA: 3.8/4.0
   - Sujets: Deep Learning, Machine Learning (R & Python), Big Data (Hadoop), EDA (Tableau).
3. Hanyang University, Séoul, Corée du Sud (08/22-12/22)
   - Échange universitaire, College of Engineering. GPA: 82.9/100.
4. EMLV (École de Management Léonard de Vinci), La Défense (09/20-08/25)
   - Double Diplôme - Master en Finance d'Entreprise.
   - Sujets: IFRS, Cash Management, Décisions Financières.

EXPÉRIENCES PROFESSIONNELLES:
1. SAFRAN ELECTRONICS & DEFENSE - Ingénieur Data Science (Stage 04/25-09/25)
   - Développement d'un modèle de substitution (surrogate model) par apprentissage supervisé (réseau de neurones dense) pour remplacer un simulateur physique.
   - Résultat: Temps de calcul divisé par 400.
   - Conception et intégration dans un outil interne avec interface utilisateur.
   - Optimisation de modèles de détection d'objets (Faster R-CNN) pour paramètres optroniques (Python, TensorFlow, Computer Vision).

2. EDF - Division Combustible Nucléaire - Développeur / Data Analyst (Stage 04/24-08/24)
   - Développement d'un outil d'analyse pour la surveillance des combustibles nucléaires.
   - Automatisation de l'extraction de données multi-formats via scripts Python.
   - Création d'une interface Power BI pour la collaboration.

3. DIOT-SIACI x ESILV - Projet d'Innovation Industrielle (09/23-03/24)
   - Développement d'une Web App et d'un modèle de régression pour la prédiction de crues en France en temps réel.
   - Partenaire: Diot-Siaci (conseil et courtage d'assurance).

PROJETS ACADEMIQUES:
1. Système d'alertes de crues en temps réel (Diot-Siaci)
   - Dates : Sept 2023 - Mars 2024
   - Rôle : Data Scientist (Équipe de 5)
   - Description : Système de détection et d'alerte sur les risques de crues en France.
   - Tâches : Collecte/analyse données hydrométriques, Data Cleaning, Stockage SQL, Web App (Streamlit, Plotly), Modèle ML prédiction temps réel (Scikit-learn).
   - Stack : Python (Pandas, Matplotlib, Seaborn, Numpy, Scipy), SQL, Streamlit.

2. Modélisation prédictive - Réadmissions patients diabétiques (Hôpitaux US)
   - Dates : Oct 2023 - Déc 2023 (Équipe de 3)
   - Description : Analyse approfondie du dataset "Diabetes 130-US hospitals 1999-2008".
   - Réalisations : Analyse/Visualisation données, Modèle de prédiction (Random Forest), Déploiement Web App Streamlit.
   - Stack : Python, Pandas, Matplotlib, Scikit-learn, Streamlit.

3. Analyse des Demandes de Valeurs Foncières (DVF)
   - Dates : Mars 2023 - Mai 2023 (Équipe de 2)
   - Description : Analyse de 18 millions de transactions immobilières (actes notariés/cadastraux).
   - Réalisations : Nettoyage massif de données, Visualisations (tendances prix/régions), Notebook Jupyter détaillé, App Web dynamique avec Django.
   - Stack : Python, Django, Data Viz.

4. Base de Données et Interopérabilité (Gestion Fleuriste)
   - Dates : Mars 2023 - Mai 2023 (Équipe de 2)
   - Description : Système de gestion commandes/clients/stocks.
   - Réalisations : Modèle Entité-Association, SQL, Sérialisation, Interface graphique Windows en C#, Interconnexion base de données.
   - Stack : MySQL, C#.

5. Traitement d'images & QR Codes
   - Dates : Jan 2022 - Mai 2022
   - Description : Manipulation bas niveau d'images Bitmap 24 bits.
   - Réalisations : Filtres (convolution, détection contours), Génération/Lecture QR Codes, Algorithme compression/décompression.
   - Stack : C#, POO.

6. Jeu Scrabble
   - Dates : Sept 2021 - Jan 2022 (Équipe de 2)
   - Description : Développement complet du jeu avec modélisation objet (Classes Joueur, Plateau, Dictionnaire...).
   - Stack : C#, POO.

7. Projets Ingénierie / Mécatronique
   - Robot de cartographie (Sept-Déc 2021) : Robot autonome 2 roues, évitement obstacles (ultrasons), cartographie simplifiée (Arduino).
   - PIX2 Instrument de musique (Oct 2021-Mai 2022) : Instrument 5 sons mécaniques contrôlés électroniquement (SolidWorks, Arduino).
   - PIX1 Éolienne urbaine (Sept 2020-Juin 2021) : Conception 3D et prototypage (SolidWorks).

COMPÉTENCES TECHNIQUES (HARD SKILLS):
- Langages: Python (Expert), R, SQL, C#, Java, JavaScript, TypeScript.
- Frameworks Data/IA: TensorFlow, Scikit-learn, XGBoost, Pandas, Matplotlib, Seaborn.
- Web/App: Streamlit, Dash, React.
- Bases de données: Oracle, PostgreSQL, NoSQL.
- Outils: Git, Docker, Jira, Microsoft Office, Hadoop.
- Visualisation: Tableau, Power BI.

SOFT SKILLS:
- Méthodes Agiles (SCRUM)
- Design Thinking
- Communication inter-équipes
- Gestion de projet

CENTRES D'INTÉRÊT:
- Tennis
- IT (Serveurs personnels, cloud privé)
- Musique (Production logicielle)
- Bénévolat: Accompagnement scolaire (A.C.E.L du Gros Caillou, 2020)
- Ski (niveau compétition)

---
[ESPACE POUR VOS AUTRES DOCUMENTS]
(Copiez ici le texte de vos rapports de stage, lettres de motivation, etc.)
`;

// --- COMPOSANTS GRAPHIQUES & DONNÉES ---

const SKILL_DATA = [
  { subject: 'Machine Learning', A: 90, fullMark: 100 },
  { subject: 'Data Engineering', A: 80, fullMark: 100 },
  { subject: 'Web Dev (Fullstack)', A: 60, fullMark: 100 },
  { subject: 'Statistics', A: 85, fullMark: 100 },
  { subject: 'Finance/Business', A: 65, fullMark: 100 },
  { subject: 'DevOps/MLOps', A: 60, fullMark: 100 },
];

const LANGUAGE_DATA = [
  { name: 'French', level: 100, label: 'Native' },
  { name: 'English', level: 78, label: 'C1 (TOEIC 975)' },
  { name: 'Spanish', level: 40, label: 'A2' },
];

const EXPERIENCE = [
  {
    id: 1,
    company: "Safran Electronics & Defense",
    role: "Data Science Engineer Intern",
    period: "04/25 - 09/25",
    description: [
      "Developed a surrogate model using supervised learning (dense neural network) to replace a physical simulator after a comparative study of regression methods.",
      "Designed and integrated the model into an internal tool with a graphical user interface.",
      "Achieved a 400x reduction in computation time.",
      "Conducted performance analysis and optimization of object detection models (Faster R-CNN) for tuning optronic parameters. (Python, TensorFlow, Computer Vision)"
    ],
    tags: ["Deep Learning", "TensorFlow", "Computer Vision"]
  },
  {
    id: 2,
    company: "EDF - Nuclear Fuel Division",
    role: "Developer / Data Analyst",
    period: "04/24 - 08/24",
    description: ["Built an analysis tool for nuclear fuel monitoring.",
      "Automated multi-format data extraction using Python scripts.",
      "Developed a Power BI dashboard to enhance cross-team collaboration."
    ],
    tags: ["Python Automation", "Power BI", "Data Engineering"]
  },
  {
    id: 3,
    company: "Diot-Siaci x ESILV",
    role: "Industrial Innovation Project",
    period: "09/23 - 03/24",
    description: ["Developed a web application and regression model for real-time flood prediction in France.",
      "Year-long project with Diot-Siaci, a multi-specialist insurance brokerage and consulting group."
    ],
    tags: ["Web App", "Predictive Analytics", "Insurance"]
  }
];

// --- UTILS: FORMATTER LE TEXTE (BOLD) ---
const FormattedText = ({ text }) => {
  if (!text) return null;
  
  // Divise le texte en morceaux basés sur **gras**
  const parts = text.split(/(\*\*.*?\*\*)/g);
  
  return (
    <span className="whitespace-pre-wrap">
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          // Enlève les ** et applique le style gras + couleur jaune
          return <strong key={index} className="font-bold text-yellow-300">{part.slice(2, -2)}</strong>;
        }
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
};

// --- GESTIONNAIRE API GEMINI (VERSION STABILISÉE) ---

const callGeminiAPI = async (prompt, apiKey, history) => {
  if (!apiKey) return null;

  // 1. Context setup
  const systemInstruction = {
    parts: [{
      text: `You are the AI Assistant for Louis Cockenpot's interactive resume.
      Your goal is to impress recruiters with Louis's skills in Data & AI.
      
      INSTRUCTIONS:
      1. Answer ONLY based on the Context provided below.
      2. If the answer is not in the context, suggest contacting Louis directly at louiscockenpot27@gmail.com.
      3. Be concise, professional, but enthusiastic.
      4. If asked about technical skills, be specific (mention libraries like TensorFlow, scikit-learn, etc.).
      5. Use bold text (e.g. **Python**) to highlight key skills or achievements.
      6. Keep answers under 3-4 sentences unless asked for details.
      7. CRITICAL: Do NOT use the word "expert" or claim mastery. Use terms like "proficient", "skilled", "experienced", or "advanced" instead.
      
      CONTEXT:
      ${INITIAL_CONTEXT}`
    }]
  };

  // 2. History formatting
  const contents = history
    .filter(msg => msg.text && msg.text.trim() !== "")
    .map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

  contents.push({ role: "user", parts: [{ text: prompt }] });

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: systemInstruction,
        contents: contents,
        safetySettings: [
            { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
            { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
            { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
            { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }
        ],
        generationConfig: {
          maxOutputTokens: 1000,
          temperature: 0.7
        }
      })
    });

    const data = await response.json();
    
    if (data.error) throw new Error(data.error.message);

    const candidate = data.candidates?.[0];
    if (!candidate) return "I'm sorry, the AI didn't return a response. Please try again.";

    if (!candidate.content && candidate.finishReason) {
       return `[Blocked: ${candidate.finishReason}. Please ask a professional question.]`;
    }

    const text = candidate.content?.parts?.[0]?.text;
    if (!text) return "I received an empty response. Please try rephrasing.";

    return text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error: " + error.message;
  }
};

// --- COMPOSANT CHAT ---

// --- UTILITAIRE DE DÉCHIFFREMENT ---
// Cette fonction inverse la logique : Base64 Decode -> Reverse String
const decryptKey = (encryptedKey) => {
  try {
    if (!encryptedKey) return "";
    const reversed = atob(encryptedKey);
    return reversed.split('').reverse().join('');
  } catch (e) {
    console.error("Erreur de déchiffrement", e);
    return "";
  }
};

const ChatInterface = () => {
  // ---------------------------------------------------------
  // CONFIGURATION CLÉ API (VIA VARIABLE D'ENVIRONNEMENT)
  // IMPORTANT: Pour le développement local avec Vite, décommentez la ligne import.meta
  // ---------------------------------------------------------
  
  // Pour le déploiement local (décommentez cette ligne) :
  const ENV_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";
  
  // Pour l'environnement de prévisualisation actuel (ne pas toucher) :
  // const ENV_API_KEY = ""; 
  // ---------------------------------------------------------

  const [messages, setMessages] = useState([
    { 
      id: 1, 
      sender: 'bot', 
      text: "Hello! I am Louis's AI Assistant. I can analyze his resume to answer your questions. Try 'Tell me about his **Safran** experience'!" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [useAI, setUseAI] = useState(false);
  const messagesEndRef = useRef(null);

  // Initialisation : Lecture et déchiffrement de la clé
  useEffect(() => {
    let encryptedKey = "";

    // -------------------------------------------------------------
    // ⚠️ CONFIGURATION LOCAL VS PREVIEW
    // Sur votre PC (Ubuntu), DÉCOMMENTEZ la ligne ci-dessous :
    encryptedKey = import.meta.env.VITE_ENCRYPTED_KEY || "";
    // -------------------------------------------------------------

    if (encryptedKey) {
      const decrypted = decryptKey(encryptedKey);
      if (decrypted) {
        setApiKey(decrypted);
        setUseAI(true);
      }
    } else {
      // Fallback : vérifie si une clé est déjà stockée dans le navigateur
      const storedKey = localStorage.getItem('gemini_api_key');
      if (storedKey) {
        setApiKey(storedKey);
        setUseAI(true);
      }
    }
  }, []);

  const saveApiKey = (key) => {
    setApiKey(key);
    localStorage.setItem('gemini_api_key', key);
    setUseAI(!!key);
    setShowSettings(false);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, isTyping]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    const userMsg = { id: Date.now(), sender: 'user', text: userText };
    
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    let responseText = "";

    if (useAI && apiKey) {
      const aiResponse = await callGeminiAPI(
        userText, 
        apiKey, 
        messages.filter(m => m.id !== 1)
      );
      responseText = aiResponse;
    } else {
      await new Promise(r => setTimeout(r, 800));
      responseText = generateLocalResponse(userText);
    }

    setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'bot', text: responseText }]);
    setIsTyping(false);
  };

  const generateLocalResponse = (query) => {
    const q = query.toLowerCase();
    if (q.includes('contact') || q.includes('email')) return "You can reach Louis at **louiscockenpot27@gmail.com**.";
    if (q.includes('python') || q.includes('stack')) return "Louis is an expert in **Python** (TensorFlow, Pandas), **SQL**, and Data Engineering tools.";
    if (q.includes('safran')) return "At **Safran**, he achieved a **400x speedup** in simulation time using Deep Learning surrogate models.";
    if (q.includes('api') || q.includes('key')) return "To enable the full AI experience, click the **settings icon** and enter an API Key (or set it in .env file).";
    return "I can tell you about his Skills, Experience, or Education. (Enable Gemini in settings for smarter answers!)";
  };

  return (
    <div className="flex flex-col h-[450px] bg-slate-900 rounded-xl overflow-hidden border border-slate-700 shadow-2xl relative">
      {/* Header */}
      <div className="bg-slate-800 p-3 border-b border-slate-700 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-2 text-slate-400 text-xs font-mono">
            {useAI ? "ai-mode: active" : "local-mode: active"}
          </span>
        </div>
        {/* On cache le bouton settings si la clé est dans l'environnement pour éviter la confusion */}
        {!ENV_API_KEY && (
          <button 
            onClick={() => setShowSettings(!showSettings)}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <Settings className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="absolute inset-0 z-20 bg-slate-900/95 flex items-center justify-center p-6 animate-fadeIn">
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-600 w-full max-w-sm shadow-2xl">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <Key className="w-4 h-4 text-yellow-400" />
              Configure Gemini AI
            </h3>
            <p className="text-slate-400 text-xs mb-4">
              To activate the advanced AI, enter a valid Google Gemini API Key.
              <br/><span className="text-slate-500 italic">(Key stored locally)</span>
            </p>
            <input 
              type="password" 
              placeholder="Paste API Key here..."
              className="w-full bg-slate-900 border border-slate-600 text-white px-3 py-2 rounded mb-4 focus:border-blue-500 outline-none font-mono text-sm"
              defaultValue={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button onClick={() => setShowSettings(false)} className="px-3 py-1 text-slate-400 hover:text-white text-sm">Cancel</button>
              <button onClick={() => saveApiKey(apiKey)} className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded text-sm font-medium">Save & Activate</button>
            </div>
          </div>
        </div>
      )}
      
      {/* Chat Area */}
      <div className="flex-1 p-4 overflow-y-auto font-mono text-sm space-y-4 scrollbar-thin scrollbar-thumb-slate-600">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-3 rounded-lg shadow-sm ${
              msg.sender === 'user' 
                ? 'bg-blue-600 text-white rounded-br-none' 
                : 'bg-slate-700 text-slate-200 rounded-bl-none border border-slate-600'
            }`}>
              {msg.sender === 'bot' && (
                <div className="flex items-center gap-2 mb-1 text-xs opacity-50">
                  {useAI ? <Sparkles className="w-3 h-3 text-yellow-400"/> : <Terminal className="w-3 h-3 text-green-400"/>}
                  {useAI ? "Gemini 1.5" : "Local Bot"}
                </div>
              )}
              {/* USE THE FORMATTER HERE */}
              <FormattedText text={msg.text} />
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-slate-700 p-3 rounded-lg rounded-bl-none flex items-center gap-1">
              <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
              <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100" />
              <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSend} className="p-3 bg-slate-800 border-t border-slate-700 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={useAI ? "Ask detailed questions..." : "Ask basic questions..."}
          className="flex-1 bg-slate-900 border border-slate-700 text-white px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 font-mono text-sm"
        />
        <button type="submit" className={`px-4 py-2 rounded-md transition-colors text-white ${useAI ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90' : 'bg-slate-600 hover:bg-slate-500'}`}>
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};

// --- MAIN LAYOUT ---

export default function ResumeApp() {
  const [activeTab, setActiveTab] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch(activeTab) {
      case 'overview': return <OverviewSection />;
      case 'experience': return <ExperienceSection />;
      case 'skills': return <SkillsSection />;
      case 'education': return <EducationSection />;
      default: return <OverviewSection />;
    }
  };

  const NavItem = ({ id, icon: Icon, label }) => (
    <button
      onClick={() => { setActiveTab(id); setMobileMenuOpen(false); }}
      className={`flex items-center gap-3 px-4 py-3 w-full transition-all duration-200 rounded-lg text-left ${
        activeTab === id 
          ? 'bg-blue-50 text-blue-700 font-medium shadow-sm' 
          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
      {activeTab === id && <ChevronRight className="ml-auto w-4 h-4" />}
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col md:flex-row">
      
      {/* Sidebar Navigation - Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200 h-screen sticky top-0 z-10">
        <div className="p-6 border-b border-slate-100">
          <div className="w-20 h-20 mb-4 overflow-hidden rounded-full shadow-lg border-2 border-white ring-2 ring-blue-100 mx-auto">
             <img 
               src={PROFILE_PIC_URL}
               alt="Louis Cockenpot" 
               className="w-full h-full object-cover"
               onError={(e) => {(e.currentTarget as HTMLImageElement).src='https://ui-avatars.com/api/?name=Louis+Cockenpot&background=0D8ABC&color=fff&size=128'}} 
             />
          </div>
          <h1 className="font-bold text-lg text-slate-900 text-center">Louis Cockenpot</h1>
          <p className="text-xs text-slate-500 font-mono text-center">Data & AI Engineer</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <NavItem id="overview" icon={User} label="Overview" />
          <NavItem id="skills" icon={Cpu} label="Skills & AI" />
          <NavItem id="experience" icon={Briefcase} label="Experience" />
          <NavItem id="education" icon={GraduationCap} label="Education" />
        </nav>

        <div className="p-6 border-t border-slate-100 text-xs text-slate-400">
          <p>© 2025 Louis Cockenpot</p>
          <p>Gemini Integration v2.3</p>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-slate-200 p-4 flex justify-between items-center sticky top-0 z-30 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 overflow-hidden rounded-full border border-slate-200">
             <img 
               src={PROFILE_PIC_URL} 
               alt="LC" 
               className="w-full h-full object-cover"
               onError={(e) => {(e.currentTarget as HTMLImageElement).src='https://ui-avatars.com/api/?name=Louis+Cockenpot&background=0D8ABC&color=fff'}} 
             />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 text-sm">Louis Cockenpot</span>
            <span className="text-xs text-slate-500">Data & AI Engineer</span>
          </div>
        </div>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg hover:bg-slate-100"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-slate-600" /> : <Menu className="w-6 h-6 text-slate-600" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-20 pt-20 px-4 md:hidden animate-fadeIn">
           <nav className="space-y-2">
            <NavItem id="overview" icon={User} label="Overview" />
            <NavItem id="skills" icon={Cpu} label="Skills & AI" />
            <NavItem id="experience" icon={Briefcase} label="Experience" />
            <NavItem id="education" icon={GraduationCap} label="Education" />
          </nav>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto scroll-smooth">
        <div className="max-w-5xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

// --- SECTIONS CONTENT ---

const OverviewSection = () => (
  <div className="space-y-8 animate-fadeIn">
    <header className="space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
        Transforming Data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Impact</span>
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
        Graduated with a Master's in Data and Artificial Intelligence (ESILV, UCLA), I aim to leverage my skills in statistical analysis and machine learning for innovative, high-impact projects.
      </p>
      
      <div className="flex flex-wrap gap-4 text-sm text-slate-600 mt-4">
        <a href="mailto:louiscockenpot27@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-sm">
          <Mail className="w-4 h-4" /> louiscockenpot27@gmail.com
        </a>
        <a href="https://linkedin.com/in/louiscockenpot" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-600 transition-colors bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-sm">
          <Linkedin className="w-4 h-4" /> LinkedIn
        </a>
        <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-sm">
          <MapPin className="w-4 h-4" /> Paris, France
        </div>
      </div>
    </header>

    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Brain className="w-5 h-5 text-blue-600" />
            AI Recruiter Assistant
          </h3>
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-xs font-mono text-slate-500">Gemini Ready</span>
          </div>
        </div>
        <ChatInterface />
      </div>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Brain className="w-5 h-5 text-indigo-600" />
            Core Competencies
          </h3>
          <div className="h-64 w-full">
             <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILL_DATA}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
                <Radar
                  name="Skill Level"
                  dataKey="A"
                  stroke="#4f46e5"
                  strokeWidth={2}
                  fill="#6366f1"
                  fillOpacity={0.3}
                />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-lg font-semibold mb-2">Looking for a Data Scientist?</h3>
            <p className="text-blue-100 text-sm mb-4">
              Specialized in Machine Learning, Data Management, and Statistical Analysis with a strong engineering background.
            </p>
            <a 
              href="mailto:louiscockenpot27@gmail.com"
              className="inline-block bg-white text-indigo-900 px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-50 transition-colors cursor-pointer"
            >
              Contact Me
            </a>
          </div>
          <div className="absolute right-0 bottom-0 opacity-10 transform translate-y-4 translate-x-4">
            <Database size={120} />
          </div>
        </div>
      </div>
    </section>
  </div>
);

const ExperienceSection = () => (
  <div className="space-y-6 animate-fadeIn">
    <div className="flex items-center gap-3 mb-8">
      <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
        <Briefcase className="w-6 h-6" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Professional Experience</h2>
        <p className="text-slate-500">My journey in engineering and data science</p>
      </div>
    </div>
    <div className="relative border-l-2 border-slate-200 ml-3 md:ml-6 space-y-12 pb-4">
      {EXPERIENCE.map((exp) => (
        <div key={exp.id} className="relative pl-8 md:pl-12 group">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-slate-300 group-hover:border-blue-500 transition-colors" />
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                <div className="text-blue-600 font-medium flex items-center gap-1">
                  {exp.company}
                  <ExternalLink className="w-3 h-3 opacity-50" />
                </div>
              </div>
              <span className="text-sm font-mono text-slate-500 bg-slate-100 px-3 py-1 rounded-full w-fit">
                {exp.period}
              </span>
            </div>
            <div className="text-slate-600 leading-relaxed mb-4 border-l-4 border-indigo-100 pl-4">
              {/* On utilise .map() pour transformer chaque texte de la liste en un paragraphe <p> */}
              {exp.description.map((phrase, index) => (
                <p key={index} className="mb-2 last:mb-0">
                  {phrase}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag, i) => (
                <span key={i} className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded border border-indigo-100">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SkillsSection = () => (
  <div className="space-y-8 animate-fadeIn">
    <div className="flex items-center gap-3 mb-8">
      <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600">
        <Code className="w-6 h-6" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Technical Arsenal</h2>
        <p className="text-slate-500">Languages, Frameworks & Tools</p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="font-semibold mb-4 text-slate-800">Languages</h3>
        <div className="space-y-3">
          {["Python", "R", "SQL", "C#", "Java"].map((skill) => (
            <div key={skill} className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-600">{skill}</span>
              <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500 rounded-full" 
                  style={{ width: skill === 'Python' ? '85%' : skill === 'SQL' ? '80%' : skill === 'Java' ? '60%' : '70%' }} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="font-semibold mb-4 text-slate-800">Spoken Languages</h3>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={LANGUAGE_DATA} layout="vertical" margin={{ left: 40 }}>
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" tick={{ fontSize: 12 }} />
              <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px' }} />
              <Bar dataKey="level" barSize={20} radius={[0, 4, 4, 0]}>
                {LANGUAGE_DATA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 0 ? '#2563eb' : index === 1 ? '#4f46e5' : '#94a3b8'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-between text-xs text-slate-500 px-4">
           <span>Basic</span>
           <span>C1 Advanced</span>
           <span>Native</span>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm md:col-span-2">
        <h3 className="font-semibold mb-4 text-slate-800">Frameworks & Data Tools</h3>
        <div className="flex flex-wrap gap-3">
          {["TensorFlow", "Scikit-learn", "XGBoost", "Pandas", "Matplotlib", "Seaborn", "Plotly-express", "Streamlit", "Docker", "Git", "Hadoop", "Power BI", "Office", "Jira"].map((item, i) => (
            <span key={i} className="px-4 py-2 bg-slate-50 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 border border-slate-200 rounded-lg text-sm transition-all cursor-default">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const EducationSection = () => (
  <div className="space-y-6 animate-fadeIn">
    <div className="flex items-center gap-3 mb-8">
      <div className="p-3 bg-purple-100 rounded-xl text-purple-600">
        <GraduationCap className="w-6 h-6" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Academic Background</h2>
        <p className="text-slate-500">Dual Master's Degree & International Experience</p>
      </div>
    </div>
    <div className="grid grid-cols-1 gap-6">
      {[
        { school: "ESILV", degree: "Master's Degree in Data & Artificial Intelligence", year: "2025", desc: "Mathematics, Explainable AI, Neural Networks, MLOps, Data Analysis, Statistics, SQL, SCRUM, Soft Skills" },
        { school: "UCLA Extension", degree: "Certificate in Data Science", year: "2025", desc: "GPA 3.8 - Deep Learning, Machine Learning (R & Python), Big Data Management (Hadoop), EDA (Tableau)" },
        { school: "EMLV", degree: "Master's Degree in Corporate Finance - Double Degree (Engineering + Business)", year: "2025", desc: "IFRS, Cash Management, European & International Law, Financial Decisions, Entrepreneurship" },
        { school: "Hanyang Univ.", degree: "Exchange", year: "2022", desc: "Engineering College, Seoul" }
      ].map((edu, idx) => (
        <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 hover:border-purple-200 transition-colors">
          <div className="flex-shrink-0">
             <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center text-2xl font-bold text-slate-400">
               {edu.school.substring(0,1)}
             </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col md:flex-row justify-between md:items-start mb-2">
              <h3 className="text-lg font-bold text-slate-900">{edu.school}</h3>
              <span className="text-sm text-purple-600 font-medium bg-purple-50 px-3 py-1 rounded-full w-fit">
                {edu.year}
              </span>
            </div>
            <h4 className="text-md font-medium text-slate-700 mb-2">{edu.degree}</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{edu.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);