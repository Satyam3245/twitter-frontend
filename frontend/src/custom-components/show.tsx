import { Button } from "../components/ui/button";
import Account from "./accounttofollow";

const Show = ()=>{
    return <div>
        <div className="border flex flex-col gap-y-1 rounded-xl p-2">
            <h1 className="font-bold text-xl">
                Subscribe to Premium
            </h1>
            <h3 className="">
                Subscribe to unlock new features and if eligible, receive a share of ads revenue.
            </h3>
            <Button>Subscribe</Button>
        </div>
        <div className="font-bold text-xl">
            <h1>
                What’s happening
            </h1>

        </div>
        <div className="border rounded-xl p-2">
            <h1 className="font-bold text-xl">
                Who to follow
            </h1>
            <div>
                <Account name="Lakshay" username="@lakshay"/>
            </div>

        </div>
    </div>
}

export default Show;