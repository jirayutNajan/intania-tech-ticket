import { MessageCircleQuestion } from "lucide-react";
import { useState, useEffect } from "react";
import Login from "./_components/login";
import TeamPass from "./_components/team-pass";

export default function Page() {
  const [ticket1, setTicket1] = useState("");
  const [ticket2, setTicket2] = useState("");
  const [claimedTickets, setClaimedTickets] = useState({ ticket1: false, ticket2: false });
  const [showTeamPass, setShowTeamPass] = useState(false);

  useEffect(() => {
    if (claimedTickets.ticket1 && claimedTickets.ticket2) {
      setTimeout(() => {
        setShowTeamPass(true);
      }, 3000); // หน่วงเวลาก่อนแสดง Team Pass
    }
  }, [claimedTickets]);

  const handleClaimTicket = (ticketNumber: 1 | 2) => {
    if (ticketNumber === 1 && ticket1) {
      setClaimedTickets(prev => ({ ...prev, ticket1: true }));
    } else if (ticketNumber === 2 && ticket2) {
      setClaimedTickets(prev => ({ ...prev, ticket2: true }));
    }
  };

  return (
    <div className="flex min-h-dvh flex-col items-center gap-10 overflow-hidden pb-48 pt-8 md:pb-24">
      <Login />
      <div className="mt-4 flex flex-col items-center gap-4">
        <h1 className="text-center text-4xl font-semibold capitalize tracking-tighter text-white sm:text-6xl">
          Claim Your Ticket
        </h1>
        <button
          className="flex rounded-full border-2 border-white/10 bg-white/10 px-4 py-2 text-xs font-medium tracking-tighter text-white/70 backdrop-blur-md hover:bg-white/15 sm:text-base"
          type="button"
        >
          <MessageCircleQuestion className="mr-0.5 size-3.5 sm:mr-1.5 sm:size-6" />
          How to Get Tickets?
        </button>
      </div>

      <div className="-mt-4 flex h-1/2 w-full grow-[0.5] items-center justify-center">
        {showTeamPass ? (
          <div className="flex flex-col items-center justify-center">
            <div className="relative flex items-center justify-center">
              <TeamPass className="scale-50 duration-500 ease-in-out hover:scale-[0.52] active:scale-[1.02] sm:scale-90 sm:hover:scale-[0.92] md:scale-100 md:hover:scale-[1.02]" />
            </div>
            <button className="-mt-6 rounded-full border-2 border-white/40 bg-white/20 px-6 py-1.5 tracking-tight text-white backdrop-blur-sm hover:bg-white/25 sm:mt-2 sm:px-10 sm:py-2.5 md:mt-8">
              Register
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-10 md:flex-row lg:gap-24">
            {/* Ticket 1 */}
            <div className="flex aspect-[4/3] w-[320px] items-center gap-6 rounded-3xl border-2 border-white/40 p-6 backdrop-blur-sm sm:p-10 lg:w-[440px]">
              <div className="flex h-full w-full flex-col items-center justify-center gap-3.5 sm:gap-6">
                <h2 className="text-center text-4xl text-white sm:text-5xl lg:text-6xl">Ticket 1</h2>
                <input
                  className="w-full rounded-2xl border-2 border-white/10 bg-white/10 px-4 py-2 text-white outline-none backdrop-blur-sm placeholder:text-white/50"
                  placeholder="Fill Your Ticket Code Here"
                  value={ticket1}
                  onChange={(e) => setTicket1(e.target.value)}
                  disabled={claimedTickets.ticket1}
                />
                <button
                  className="rounded-full border-2 border-white/20 bg-white/20 px-4 py-1.5 text-white backdrop-blur-sm hover:bg-white/30 sm:px-8 sm:py-2.5"
                  onClick={() => handleClaimTicket(1)}
                >
                  Claim Ticket
                </button>
              </div>
            </div>

            {/* Ticket 2 */}
            <div className="flex aspect-[4/3] w-[320px] items-center gap-6 rounded-3xl border-2 border-white/40 p-6 backdrop-blur-sm sm:p-10 lg:w-[440px]">
              <div className="flex h-full w-full flex-col items-center justify-center gap-3.5 sm:gap-6">
                <h2 className="text-center text-4xl text-white sm:text-5xl lg:text-6xl">Ticket 2</h2>
                <input
                  className="w-full rounded-2xl border-2 border-white/10 bg-white/10 px-4 py-2 text-white outline-none backdrop-blur-sm placeholder:text-white/50"
                  placeholder="Fill Your Ticket Code Here"
                  value={ticket2}
                  onChange={(e) => setTicket2(e.target.value)}
                  disabled={claimedTickets.ticket2}
                />
                <button
                  className="rounded-full border-2 border-white/20 bg-white/20 px-4 py-1.5 text-white backdrop-blur-sm hover:bg-white/30 sm:px-8 sm:py-2.5"
                  onClick={() => handleClaimTicket(2)}
                >
                  Claim Ticket
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
