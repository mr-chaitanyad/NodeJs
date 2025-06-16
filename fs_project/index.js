const fs = require("fs");
const file_path = "notes.json";

// Constant functions 
const loadNotes = ()=>{
    if(!fs.existsSync(file_path))
        return [];
    const data = fs.readFileSync(file_path,"utf-8");
    return JSON.parse(data);

}
const saveNotes = (notes) =>{
    fs.writeFileSync(file_path,JSON.stringify(notes,null,2));
}
//
const [,,command,...args] = process.argv; // input operation & notes like :-  node index.js add "Hi User"

switch(command)
{
    case "add":  // add operation
    {
        const text = args.join(" ");
        if(!text){
            console.log("Plz provide data");
            break;
        }
        const notes = loadNotes();
        const newNote = {
            id: notes.length +1,
            text,
            time: new Date().toISOString()
        };
        notes.push(newNote);
        saveNotes(notes);
        console.log("New Note added");
        break;
    }
    case "read":  // read operation
    {
        const index = parseInt(args[0]);
        const notes = loadNotes();
        if(isNaN(index))
        {
            if(notes.length === 0) {
                console.log("Notes are empty");
                break;
            }
            else
            {
            notes.map(n=>console.log(`${n.id}) ${n.text} ${n.time}\n`));
            break;
            }
        }
        else{
        const data = notes.find((element)=>element.id ===index);
        if(!data)
        {
        console.log("ID not found");
        break;
        }
        console.log(`${data.id}) ${data.text} ${data.time}`)
        break;
        }
    }
    case "delete": // delete operation
    {
        const index = parseInt(args[0]);
        const notes = loadNotes();
        const filterNotes = notes.filter((note) => note.id !== index);
        if(filterNotes.length === notes.length){
            console.log("Notes not found");
        }
        else{
            const updatedNotes = filterNotes.map((note,index)=>({
                ...note,
                id:index+1
            }))
            saveNotes(updatedNotes);
            console.log(`Deleted note ${index}`);
        }
        break;
    }
    default:
        console.log("Unknown command!");
        console.log("Available commands:");
        console.log("   node index.js add \"Your note\"");
        console.log("   node index.js read [optional_id]");
        console.log("   node index.js delete <note_id>");
    break;
}