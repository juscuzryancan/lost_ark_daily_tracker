import { useState } from "react";
import { BsPencil } from "react-icons/bs";

interface CharacterTabProps {
  character: string;
  characters: Array<string>;
  setCharacters: React.Dispatch<Array<string>>;
  index: number;
}

const CharacterTab = ({
  character, 
  index, 
  characters, 
  setCharacters
}: CharacterTabProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [characterName, setCharacterName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCharacters = [...characters];
    newCharacters[index] = characterName;
    setCharacters(newCharacters);
    setIsEditing(false);
  }

  return (
    <div className="flex gap-1 px-4 py-2">
      {isEditing 
        ? <form onSubmit={handleSubmit}>
            <input placeholder={character} value={characterName} onChange={(e) => {setCharacterName(e.target.value)}}/>
          </form>
        : <span>{character}</span>}
      <button onClick={() => setIsEditing(true)}>
        <BsPencil />
      </button>
    </div>
  )
}

const CharacterSelect = () => {
  const [characters, setCharacters] = useState<Array<string>>(["Kageyama"]);

  const handleAddCharacter = () => {
    setCharacters([...characters, "New Character"])
  };

  return (
    <nav
      className="flex"
      data-testid="character-select"
    >
      {characters.map((character, i) => {
        return (
          <CharacterTab 
            characters={characters} 
            setCharacters={setCharacters} 
            character={character} 
            index={i}
            key={i}
          />
        );
      })}
      <button 
        data-testid="add-character-button"
        onClick={handleAddCharacter}
      >
        +
      </button>
    </nav>
  );
}

export default CharacterSelect;
