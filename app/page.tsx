'use client'
import { MessageCircleQuestion } from "lucide-react";
import { Figma, Settings } from "lucide-react"; // Import Figma and Settings icons
import Login from "./_components/login";
import TeamPass from "./_components/team-pass";
import { useState, useEffect } from "react";
import { cn } from "./_lib/utils";

export default function Page() {
  const [ticket1, setTicket1] = useState("");
  const [ticket2, setTicket2] = useState("");
  const [claimedTickets, setClaimedTickets] = useState({ ticket1: false, ticket2: false });
  const [showFlash, setShowFlash] = useState(false);
  const [showTeamPass, setShowTeamPass] = useState(false);
  const [whirlpoolAnimation, setWhirlpoolAnimation] = useState(false);
  const [explodeAnimation, setExplodeAnimation] = useState(false);

  // Function to handle ticket claim button clicks
  const handleClaimTicket = (ticketNumber: 1 | 2) => {
    if (ticketNumber === 1 && ticket1) {
      setClaimedTickets(prev => ({ ...prev, ticket1: true }));
    } else if (ticketNumber === 2 && ticket2) {
      setClaimedTickets(prev => ({ ...prev, ticket2: true }));
    }
  };

  // Effect to check when both tickets are claimed
  useEffect(() => {
    if (claimedTickets.ticket1 && claimedTickets.ticket2) {
      console.log("claimed two tickets");

      // Wait for the claimed animation to complete before starting the whirlpool animation
      setTimeout(() => {
        setWhirlpoolAnimation(true);

        // Wait for the whirlpool animation to complete before starting the explosion animation
        setTimeout(() => {
          setExplodeAnimation(true);

          // After explosion animation, show flash
          setTimeout(() => {
            setShowFlash(true);

            // After flash, show team pass
            setTimeout(() => {
              setShowFlash(false);
              setShowTeamPass(true);
            }, 1000);
          }, 1000);
        }, 2000); // Adjust this delay to match the whirlpool animation duration
      }, 1000); // Adjust this delay to match the claimed animation duration
    }
  }, [claimedTickets]);

  return (
    <div className="flex min-h-dvh flex-col items-center gap-10 overflow-hidden pb-48 pt-8 md:pb-24">
      {showFlash && (
        <div className="fixed inset-0 z-50 bg-white animate-flash" />
      )}

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
          <div className="flex flex-col items-center justify-center animate-fadeIn">
            <div className="relative flex items-center justify-center" />
            <TeamPass className="scale-50 duration-500 ease-in-out hover:scale-[0.52] active:scale-[1.02] sm:scale-90 sm:hover:scale-[0.92] md:scale-100 md:hover:scale-[1.02]" />
            <button className="-mt-6 rounded-full border-2 border-white/40 bg-white/20 px-6 py-1.5 tracking-tight text-white backdrop-blur-sm hover:bg-white/25 sm:mt-2 sm:px-10 sm:py-2.5 md:mt-8">
              Register
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-10 md:flex-row lg:gap-24">
            {/* INPUT 1 */}
            <div className={cn(
              "relative flex aspect-[4/3] w-[320px] items-center gap-6 rounded-3xl border-2 p-6 backdrop-blur-sm sm:p-10 lg:w-[440px] transition-all duration-500",
              claimedTickets.ticket1 && !whirlpoolAnimation && "ticket-claimed-left",
              !claimedTickets.ticket1 && "border-white/40",
              whirlpoolAnimation && "animate-whirlpoolLeft",
              explodeAnimation && "animate-explode"
            )}>
              <div className="flex h-full w-full flex-col items-center justify-center gap-3.5 sm:gap-6">
                {claimedTickets.ticket1 ? (
                  <>
                    <Figma className="text-white w-20 h-20" />
                    <div className="absolute bottom-4 text-white text-sm">
                      Expiring in 1 days 23 hours
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="select-none text-center font-ndot47 text-4xl tracking-tighter text-white sm:text-5xl lg:text-6xl">
                      Ticket 1
                    </h2>
                    <input
                      className="w-full rounded-2xl border-2 border-white/10 bg-white/10 px-4 py-2 font-geistSans text-base font-medium tracking-tighter text-white outline-none backdrop-blur-sm placeholder:text-white/50 focus-visible:border-white/50 focus-visible:bg-white/20 md:px-6 md:py-3.5 md:text-xl"
                      placeholder="Fill Your Ticket Code Here"
                      value={ticket1}
                      onChange={(e) => setTicket1(e.target.value)}
                      disabled={claimedTickets.ticket1}
                    />
                    <button
                      className={cn(
                        "rounded-full border-2 px-4 py-1.5 tracking-tight backdrop-blur-sm sm:px-8 sm:py-2.5 transition-all duration-300",
                        claimedTickets.ticket1 
                          ? "border-[#8A2BE2]/40 bg-[#8A2BE2]/20 text-white/80 cursor-default"
                          : "border-white/20 bg-white/20 hover:bg-white/30 text-white"
                      )}
                      type="button"
                      onClick={() => handleClaimTicket(1)}
                      disabled={claimedTickets.ticket1}
                    >
                      {claimedTickets.ticket1 ? "Ticket Claimed" : "Claim Ticket"}
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* INPUT 2 */}
            <div className={cn(
              "relative flex aspect-[4/3] w-[320px] items-center gap-6 rounded-3xl border-2 p-6 backdrop-blur-sm sm:p-10 lg:w-[440px] transition-all duration-500",
              claimedTickets.ticket2 && !whirlpoolAnimation && "ticket-claimed-right",
              !claimedTickets.ticket2 && "border-white/40",
              whirlpoolAnimation && "animate-whirlpoolRight",
              explodeAnimation && "animate-explode"
            )}>
              <div className="flex h-full w-full flex-col items-center justify-center gap-3.5 sm:gap-6">
                {claimedTickets.ticket2 ? (
                  <>
                    <Settings className="text-white w-20 h-20" />
                    <div className="absolute bottom-4 text-white text-sm">
                      Expiring in 1 days 23 hours
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="select-none text-center font-ndot47 text-4xl tracking-tighter text-white sm:text-5xl lg:text-6xl">
                      Ticket 2
                    </h2>
                    <input
                      className="w-full rounded-2xl border-2 border-white/10 bg-white/10 px-4 py-2 font-geistSans text-base font-medium tracking-tighter text-white outline-none backdrop-blur-sm placeholder:text-white/50 focus-visible:border-white/50 focus-visible:bg-white/20 md:px-6 md:py-3.5 md:text-xl"
                      placeholder="Fill Your Ticket Code Here"
                      value={ticket2}
                      onChange={(e) => setTicket2(e.target.value)}
                      disabled={claimedTickets.ticket2}
                    />
                    <button
                      className={cn(
                        "rounded-full border-2 px-4 py-1.5 tracking-tight backdrop-blur-sm sm:px-8 sm:py-2.5 transition-all duration-300",
                        claimedTickets.ticket2 
                          ? "border-[#8A2BE2]/40 bg-[#8A2BE2]/20 text-white/80 cursor-default"
                          : "border-white/20 bg-white/20 hover:bg-white/30 text-white"
                      )}
                      type="button"
                      onClick={() => handleClaimTicket(2)}
                      disabled={claimedTickets.ticket2}
                    >
                      {claimedTickets.ticket2 ? "Ticket Claimed" : "Claim Ticket"}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}