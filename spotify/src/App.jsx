import { useState } from 'react'
import './App.css'

function Navbar() {
  return (
    <div className="navbar">
      <h3>Spotify</h3>
    </div>
  )
}

function SongCard({ title, artist }) {
  return (
    <div className="song-card">
      <div className="song-image">🎵</div>
      <div className="song-info">
        <h4>{title}</h4>
        <p>{artist}</p>
      </div>
    </div>
  )
}

function AddSong({ onAddSong }) {
  const [title, setTitle] = useState('')
  const [artist, setArtist] = useState('')

  const handleAdd = () => {
    if (!title || !artist) return
    onAddSong({ title, artist })
    setTitle('')
    setArtist('')
  }

  return (
    <div className="add-song">
      <input
        type="text"
        placeholder="Judul lagu"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nama artis"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <button onClick={handleAdd}>Tambah</button>
    </div>
  )
}

function Player() {
  return (
    <div className="player">
      <p>No song playing</p>
    </div>
  )
}

export default function App() {
  const [songs, setSongs] = useState([
    { id: 1, title: 'Blinding Lights', artist: 'The Weeknd' },
    { id: 2, title: 'Levitating', artist: 'Dua Lipa' },
    { id: 3, title: 'Save Your Tears', artist: 'The Weeknd' },
  ])

  const handleAddSong = (song) => {
    setSongs([...songs, { ...song, id: Date.now() }])
  }

  return (
    <div className="app">
      <div className="main">
        <Navbar />
        <AddSong onAddSong={handleAddSong} />
        
        <div className="songs-grid">
          {songs.map((song) => (
            <SongCard
              key={song.id}
              title={song.title}
              artist={song.artist}
            />
          ))}
        </div>
      </div>

      <Player />
    </div>
  )
}