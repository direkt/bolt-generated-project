import { motion } from 'framer-motion'
import { Star, Sparkles, Waves } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen gradient-bg flex flex-col items-center justify-center p-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="interactive-card p-8 mb-8 max-w-2xl w-full text-center"
      >
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500 mb-4">
          Welcome to Next.js!
        </h1>
        <p className="text-blue-100/80 text-lg mb-6">
          Experience the perfect blend of design and interaction
        </p>
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <Star size={48} className="text-blue-400 inline-block" />
        </motion.div>
      </motion.div>

      {/* Interactive Buttons Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
        <Button 
          variant="default" 
          className="button-shine glow-effect bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
        >
          <Sparkles className="mr-2 h-4 w-4" />
          Explore
        </Button>
        
        <Button 
          variant="secondary"
          className="button-shine glow-effect bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600"
        >
          <Waves className="mr-2 h-4 w-4" />
          Discover
        </Button>
        
        <Button 
          variant="outline"
          className="button-shine border-2 border-blue-400/50 hover:border-blue-300 text-white"
        >
          <Star className="mr-2 h-4 w-4" />
          Learn More
        </Button>
      </div>

      {/* Floating Elements */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute hidden sm:block"
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            delay: i * 0.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            left: `${20 + i * 30}%`,
            top: `${20 + i * 20}%`,
          }}
        >
          <div className="w-4 h-4 rounded-full bg-blue-400/20 blur-sm" />
        </motion.div>
      ))}
    </div>
  )
}
