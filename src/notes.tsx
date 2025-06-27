import React,{useState} from 'react'
import checkboxIcon from './assets/checkbox svg.svg' ;
import notesIcon from './assets/notes svg.svg';
import dustbinIcon from './assets/dustbin.svg';
import '../htmlImplementation/style/notes.css'
import menuIcon from './assets/menu.svg';
import profileIcon from './assets/profile svg.svg';


function MyNotes (){
    const[notes,setNotes]= useState([]);
    const[content,setContent]=useState("");
    const[title,setTitle]=useState("");
    const[searchQuery,setSearchQuery]=useState("");
    const [showForm, setShowForm] = useState(false);
    const [showSearch, setShowSearch] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
const toggleMenu = () => setMenuOpen(!menuOpen);


  
 const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleSearchChange = (e) =>{
    setSearchQuery(e.target.value);}
  function Add(){
    const newNote={
      ID: Date.now(),
        id:`${new Date().getDate().toString().padStart(2,"0")}/${(new Date().getMonth()+1).toString().padStart(2,"0")}/${new Date().getFullYear()} `,
        title,
        content
    };
    setNotes(prevNotes =>[...prevNotes,newNote] );
    setContent("");
    setTitle("");
    setShowForm(false);
    setShowSearch(true);
    
  }
   const deleteNote = (ID) => {
    setNotes(prevNotes => prevNotes.filter(note => note.ID !== ID));
  };
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );
  function New(){
    setShowForm(true) ;
    setShowSearch(false);
  }

  

    return(
        <div className='body'>
        <header>
    <h1>Taskify <button className='menu' onClick={toggleMenu}><img src={menuIcon}  width="20px"/></button> </h1>
    <br />
    { menuOpen &&   <nav className='alltab'>

      <a href="tasks.html"  className="tab" style={{gap: '8px'}}> <img src={checkboxIcon} alt="image not found"
          width="20px"/>Tasks</a>
      <a href="notes.html" className="tab"  style={{gap: '8px'}}><img src={notesIcon}
          alt="image not found" height="25px"/> Notes</a>
      <a href="profile.html" className="tab"  style={{gap: '8px'}}><img src={profileIcon} alt="image not found"
          height="35px" />Profile</a>
     <button className='logout'>Logout</button>
    </nav>}
  </header>
        <div className="subsection">
        <h2>My Notes</h2>
        <button onClick={()=> New()}
           className='new'>+ New Note </button>
      </div>
      {showSearch && <input type="search" className='search' placeholder="Search notes..." value={searchQuery} onChange={handleSearchChange} />}
    {showForm &&
    (
  <div className="modal-overlay" onClick={() => setShowForm(false)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <span className="close-button" onClick={() => setShowForm(false)}>&times;</span>
    
       <form onSubmit={(e) => {
        e.preventDefault();
         if (!title.trim() || !content.trim()) {
      alert("Both title and content are required.");
      return;}
       Add();}}>
        
       <input type='text' className='title' placeholder='Title' value={title} onChange={handleTitleChange} required={true}/>
       <br />
        <textarea placeholder='content' value={content} onChange={ handleContentChange} required={true}/> 
            <button type='submit' className='add' >Add</button>
            
        </form>
         </div>
  </div>)}
       
 
 <ul  className='nodots'>
 {(searchQuery === '' ? notes : filteredNotes).length === 0 && (
          <li>No notes found.</li>
        )}

   
        {(searchQuery === '' ? notes : filteredNotes).map(note => (
          
            <li  className='card' key={note.ID}>
            <div className='card1'>
              <strong>{note.title}</strong><br/> {note.content}
            <br /> </div>
            <small className='date'>{note.id}</small>
           
            <br />
            <button className='delete' onClick={() => deleteNote(note.ID)}> <img src={dustbinIcon} alt="delete"  width="19px" style={{opacity: 0.4}}/>  </button>
          </li>
          
        ))}
      </ul>
          

     
    </div>
  );
}
export default MyNotes;