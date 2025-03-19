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
  const [mergeAnimation, setMergeAnimation] = useState(false); // New state for merging tickets
  const [showGlow, setShowGlow] = useState(false); // New state for glowing effect

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

        // Wait for the whirlpool animation to complete before starting the merge animation
        setTimeout(() => {
          setWhirlpoolAnimation(false); // End whirlpool animation
          setMergeAnimation(true); // Trigger merge animation

          // Show glowing effect during the merge
          setTimeout(() => {
            setShowGlow(true);

            // After glowing effect, show the Team Pass
            setTimeout(() => {
              setShowGlow(false);
              setMergeAnimation(false);
              setShowTeamPass(true);
            }, 1500); // Duration of glowing effect
          }, 1000); // Delay before glowing effect starts
        }, 2000); // Duration of whirlpool animation
      }, 1000); // Delay before whirlpool animation starts
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
      <div className="-mt-4 flex h-1/2 w-full grow-[0.5] items-center justify-center relative">
        {showTeamPass ? (
          <div className="flex flex-col items-center justify-center animate-fadeIn">
            {/* Light effect behind TeamPass */}
            <div className="absolute z-[-1] h-[500px] w-[500px] rounded-full bg-white blur-[200px] opacity-80 animate-pulse" />
            
            <div className="relative flex items-center justify-center">
              <TeamPass className="scale-50 duration-500 ease-in-out hover:scale-[0.52] active:scale-[1.02] sm:scale-90 sm:hover:scale-[0.92] md:scale-100 md:hover:scale-[1.02]" />
            </div>
            <button className="-mt-6 rounded-full border-2 border-white/40 bg-white/20 px-6 py-1.5 tracking-tight text-white backdrop-blur-sm hover:bg-white/25 sm:mt-2 sm:px-10 sm:py-2.5 md:mt-8">
              Register
            </button>
          </div>
        ) : (
          <>
            {/* Glowing effect */}
            {showGlow && (
              <div className="absolute z-50 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 blur-3xl opacity-80 animate-pulse" />
            )}

            <div className="flex flex-col gap-10 md:flex-row lg:gap-24">
              {/* INPUT 1 */}
              <div className={cn(
                "relative flex aspect-[4/3] w-[320px] items-center gap-6 rounded-3xl border-2 p-6 backdrop-blur-sm sm:p-10 lg:w-[440px] transition-all duration-500",
                claimedTickets.ticket1 && !whirlpoolAnimation && "ticket-claimed-left",
                !claimedTickets.ticket1 && "border-white/40",
                whirlpoolAnimation && "animate-whirlpoolLeft",
                mergeAnimation && "absolute left-1/2 top-1/2 transform -translate-x-[120%] -translate-y-1/2 z-50 scale-75 rotate-6", // Merge animation for Ticket 1
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
                mergeAnimation && "absolute left-1/2 top-1/2 transform -translate-x-[-120%] -translate-y-1/2 z-50 scale-75 rotate-[-6deg]", // Merge animation for Ticket 2
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
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}