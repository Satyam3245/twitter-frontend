import { Search } from "lucide-react"
import { Input } from "../components/ui/input"

const SearchBar = ()=>{
    return <div className="rounded-3xl flex gap-x-3 items-center bg-gray-200 p-3 w-[300px]">
        <Search/>
        <Input className="w-full" placeholder="Search"/>
    </div>
} 

export default SearchBar