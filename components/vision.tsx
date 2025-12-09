import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export const Vision: React.FC = () => {
  return (
    <section id="vision" className="bg-charcoal text-off-white py-32 md:py-48 px-6 md:px-24 relative overflow-hidden">
      
      {/* Background Texture Detail */}
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-gray-700 to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-32">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="md:w-1/3 mb-12 md:mb-0"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 block mb-8 flex items-center">
              <span className="w-8 h-px bg-gray-500 mr-4"></span>
              Philosophy
            </span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight font-light tracking-wide">
              誠実さと、<br />
              寄り添う力。
            </h2>
          </motion.div>

          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             variants={fadeInUp}
             className="md:w-1/2"
          >
            <p className="font-sans text-sm md:text-base text-gray-400 leading-loose text-justify">
              私たちは「利よりも義」を重んじます。目先の利益ではなく、お客様の人生にとって何が本当に正しいのか。その問いに向き合い続けることこそが、私たちの存在意義です。独立系ならではの中立的な立場から、生涯にわたる伴走者として、あなたの未来を共に描きます。
            </p>
          </motion.div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-px bg-gray-800/30 border border-gray-800/30">
          
          {[
            {
              title: "公正・中立",
              en: "Fairness",
              desc: "バスケットボールの審判員としての経験が培った、冷静な判断力と公平性。特定の企業に属さない「独立系」だからこそ、ノルマやしがらみのない、真のご提案が可能です。"
            },
            {
              title: "数字と分析",
              en: "Analytics",
              desc: "家計から事業まで、徹底的な収支分析に基づくご提案。感情論だけでなく、確かな数字に基づいたコンサルティングで、漠然とした不安を明確な安心へと変えていきます。"
            },
            {
              title: "生涯伴走",
              en: "Partnership",
              desc: "異動や転勤のない独立系アドバイザーだからこそ、一生涯のお付き合いが可能です。「わかりやすく伝える」ことを大切に、世代を超えた資産承継までサポートします。"
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
              variants={fadeInUp}
              className="bg-charcoal p-12 md:p-16 group hover:bg-[#151515] transition-colors duration-500 relative"
            >
              <div className="absolute top-12 right-12 text-gray-800 font-serif text-6xl opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                0{idx + 1}
              </div>
              <h3 className="font-serif text-2xl md:text-3xl mb-2 text-white">{item.title}</h3>
              <span className="text-[10px] uppercase tracking-widest text-gold-accent block mb-8">{item.en}</span>
              <p className="font-sans text-xs md:text-sm text-gray-400 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};