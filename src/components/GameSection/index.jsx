import {useState} from "react";

const coins = ['ETH', 'BTC', 'SOL', 'ALGO', 'SAMO'];
import coinHead from "/public/coinhead.png"
import cointail from "/public/cointail.png"


function GameSection() {
    const [selected, setSelected] = useState("")

    return (
        <div className="w-1/2 mx-auto border-2 rounded-xl p-3 flex flex-col gap-5 bg-[#FFCA56]">
            <div className="border-2 p-2 rounded-xl flex flex-col gap-2">
                <div className="flex justify-between">
                    <div>Wager</div>
                    <div>Balance: X FTM</div>
                </div>

                <div className="flex justify-between items-center">
                    <input
                        type="number"
                        placeholder={'0.0'}
                        className="bg-[#FFCA56] placeholder:text-gray-700 text-2xl focus:outline-none appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />

                    <select className="ml-3 border p-2 rounded-lg bg-[#FFCA56]">
                        {
                            coins.map((coin) => (
                                <option
                                    key={coin}
                                    value={coin}
                                    className="bg-white"
                                >
                                    {coin}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </div>

            <div className="flex flex-col border-2 p-2 rounded-xl pl-14 pr-14 gap-5">
                <div className="flex justify-between pl-4 pr-4">
                    <div>Heads</div>
                    <div>or</div>
                    <div>Tails</div>
                </div>
                <div className="flex justify-between">
                    <img
                        className={`w-24 cursor-pointer hover:scale-95 transition-all duration-300 ${selected === "Heads" ? "opacity-100" : "opacity-40"}`}
                        src={coinHead}
                        alt="Heads"
                        onClick={() => setSelected("Heads")}
                    />
                    <img
                        className={`w-24 hover:scale-95 cursor-pointer transition-all duration-300 ${selected === "Tails" ? "opacity-100" : "opacity-40"}`}
                        src={cointail}
                        alt="Tails"
                        onClick={() => setSelected("Tails")}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <div className="mx-auto w-64 h-1 bg-gradient-to-r from-transparent via-[#422D26] to-transparent"></div>
                <div className="flex gap-5 justify-center">Your Winnings: <span>0.00</span></div>
            </div>

            <div>
                <button className="bg-gray-800 text-xl text-white w-full transition-all duration-300 hover:scale-105 active:scale-95 py-5 rounded-xl border-2 outline-white">Withdraw</button>
            </div>
        </div>
    );
}

export default GameSection;
