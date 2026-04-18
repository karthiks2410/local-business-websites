import { Metadata } from "next";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { Button } from "@/components/Button";
import { classes } from "@/lib/config";
import { Clock, Users, Flame, Heart, Dumbbell, Music } from "lucide-react";

export const metadata: Metadata = {
  title: "Classes",
  description: "Join our group fitness classes - Yoga, Zumba, HIIT, and more. Expert instructors and energizing sessions.",
};

const classIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Yoga: Heart,
  Zumba: Music,
  HIIT: Flame,
  "Group Classes": Users,
};

export default function ClassesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-zinc-900/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              Group Classes
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              High-energy sessions led by certified instructors. Find your fit!
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {classes.map((classItem) => {
              const IconComponent = classIcons[classItem.name] || Dumbbell;
              return (
                <StaggerItem key={classItem.name}>
                  <div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-[#C9A962]/30 transition-all">
                    {/* Image Placeholder */}
                    <div className="h-64 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center relative overflow-hidden">
                      <IconComponent className="w-24 h-24 text-zinc-700 group-hover:text-[#C9A962]/30 transition-colors" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                      {/* Class Name Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-3xl font-black text-white">
                          {classItem.name}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-gray-400 mb-6">
                        {classItem.description}
                      </p>

                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center p-3 bg-white/5 rounded-lg">
                          <Clock className="w-5 h-5 text-[#C9A962] mx-auto mb-1" />
                          <p className="text-white font-medium text-sm">{classItem.duration}</p>
                          <p className="text-gray-500 text-xs">Duration</p>
                        </div>
                        <div className="text-center p-3 bg-white/5 rounded-lg">
                          <Users className="w-5 h-5 text-[#C9A962] mx-auto mb-1" />
                          <p className="text-white font-medium text-sm">{classItem.level}</p>
                          <p className="text-gray-500 text-xs">Level</p>
                        </div>
                        <div className="text-center p-3 bg-white/5 rounded-lg">
                          <Flame className="w-5 h-5 text-[#C9A962] mx-auto mb-1" />
                          <p className="text-white font-medium text-sm">High</p>
                          <p className="text-gray-500 text-xs">Calories</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{classItem.schedule}</span>
                        </div>
                        <Button href="/contact" variant="secondary" size="sm">
                          Join Class
                        </Button>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Weekly Schedule</h2>
            <p className="text-gray-400">Plan your week with our class timings</p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="overflow-x-auto">
              <table className="w-full max-w-4xl mx-auto">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Time</th>
                    <th className="text-center py-4 px-4 text-gray-400 font-medium">Mon</th>
                    <th className="text-center py-4 px-4 text-gray-400 font-medium">Tue</th>
                    <th className="text-center py-4 px-4 text-gray-400 font-medium">Wed</th>
                    <th className="text-center py-4 px-4 text-gray-400 font-medium">Thu</th>
                    <th className="text-center py-4 px-4 text-gray-400 font-medium">Fri</th>
                    <th className="text-center py-4 px-4 text-gray-400 font-medium">Sat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 text-white font-medium">6:00 AM</td>
                    <td className="text-center py-4 px-4"><span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Yoga</span></td>
                    <td className="text-center py-4 px-4 text-gray-500">-</td>
                    <td className="text-center py-4 px-4"><span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Yoga</span></td>
                    <td className="text-center py-4 px-4 text-gray-500">-</td>
                    <td className="text-center py-4 px-4"><span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Yoga</span></td>
                    <td className="text-center py-4 px-4 text-gray-500">-</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 text-white font-medium">5:00 PM</td>
                    <td className="text-center py-4 px-4"><span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">HIIT</span></td>
                    <td className="text-center py-4 px-4 text-gray-500">-</td>
                    <td className="text-center py-4 px-4"><span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">HIIT</span></td>
                    <td className="text-center py-4 px-4 text-gray-500">-</td>
                    <td className="text-center py-4 px-4"><span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">HIIT</span></td>
                    <td className="text-center py-4 px-4 text-gray-500">-</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 text-white font-medium">6:00 PM</td>
                    <td className="text-center py-4 px-4 text-gray-500">-</td>
                    <td className="text-center py-4 px-4"><span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm">Zumba</span></td>
                    <td className="text-center py-4 px-4 text-gray-500">-</td>
                    <td className="text-center py-4 px-4"><span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm">Zumba</span></td>
                    <td className="text-center py-4 px-4 text-gray-500">-</td>
                    <td className="text-center py-4 px-4"><span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm">Zumba</span></td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 text-white font-medium">7:00 PM</td>
                    <td className="text-center py-4 px-4"><span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Group</span></td>
                    <td className="text-center py-4 px-4"><span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Group</span></td>
                    <td className="text-center py-4 px-4"><span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Group</span></td>
                    <td className="text-center py-4 px-4"><span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Group</span></td>
                    <td className="text-center py-4 px-4"><span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Group</span></td>
                    <td className="text-center py-4 px-4 text-gray-500">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <ScrollReveal className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              * Schedule subject to change. Contact us for the latest timings.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Why Group Classes?</h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Users,
                title: "Community Motivation",
                description: "Work out with like-minded people who push you to do your best",
              },
              {
                icon: Flame,
                title: "Expert Guidance",
                description: "Certified instructors ensure proper form and maximum results",
              },
              {
                icon: Clock,
                title: "Structured Workouts",
                description: "No guesswork - follow a proven routine designed for results",
              },
            ].map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="text-center p-6">
                  <div className="w-14 h-14 mx-auto mb-4 bg-[#C9A962]/10 rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-7 h-7 text-[#C9A962]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-t from-zinc-900/50 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Join a Class?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Classes are included with our Fitness membership. Get started today!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Join Now
              </Button>
              <Button href="/plans" variant="secondary" size="lg">
                View Plans
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
