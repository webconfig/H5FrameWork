import { Dictionary } from "./Dictionary";
import { player } from "./player";
//房间
export class room
{
    public Id:number;
    players:Dictionary<player>;
    public constructor(_id:number)
    {
        this.players=new Dictionary<player>();
        this.Id=_id;
    }

    public AddPlayer(player)
    {
        this.players.Add(player);
    }
}