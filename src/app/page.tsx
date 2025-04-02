export default function Home() {
  const getDifficulties = () => {
    return "Hard";
  };

  return (
    <div className="flex flex-col min-h-screen ">
      <nav className="navbar flex flex-row h-16 justify-center gap-5 bg-[#454D5C] sticky">
        <button className="flex flex-wrap items-center m-2 leading-tight max-w-24 font-sans text-yellow-50 text-opacity-60 hover:text-yellow-50 hover:border-b-orange-500 hover:border-b-2 ">
          Imaginarium Theatre
        </button>
        <button className="flex flex-wrap items-center m-2 leading-tight max-w-24 font-sans text-yellow-50 text-opacity-60 hover:text-yellow-50 hover:border-b-orange-500 hover:border-b-2 ">
          Character List
        </button>
      </nav>
      <main>
        <div className="main-container flex flex-col items-center m-12 bg-opacity-70 bg-[#D9D9D9]">
          <div className="season-elements flex flex-row items-center gap-5">
            <div className="elements flex flex-row items-center h-14 gap-5">
              <p>Season Elements</p>
              <p>Anemo</p>
              <p>Cryo</p>
              <p>Electro</p>
            </div>
            <button>Change</button>
          </div>
          <div className="flex flex-col justify-start items-start content-between gap-5 summary p-10 bg-[#C1B49C] bg-opacity-70">
            <ul className="list-disc ">
              <li>Difficulties: {getDifficulties()}</li>
              <li>
                Total selectable characters: 21
                <p className="pl-5">
                  You need 1 more &quot;Alternate cast&quot; character at level
                  70 to unlock the next difficulty
                </p>
              </li>
            </ul>
            <button>Update Roster</button>
          </div>
          <div className="selected-character-container h-44"></div>
        </div>
      </main>
      <footer className="flex flex-row w-full justify-center items-center h-16 gap-5 bg-[#454D5C] absolute bottom-0 ">
        <div>Made by Haruchon</div>
      </footer>
    </div>
  );
}
