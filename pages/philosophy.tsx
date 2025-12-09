import React from 'react';
import { motion } from 'framer-motion';
import { PageHero } from '../components/PageHero';

export const Philosophy: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-off-white"
    >
      <PageHero title="Philosophy" subtitle="Our Beliefs" jpTitle="信条・モットー" />

      {/* Main Statement */}
      <section className="px-6 md:px-24 py-24 max-w-5xl mx-auto">
        <p className="font-serif text-3xl md:text-5xl leading-tight text-charcoal mb-12 text-justify">
          「人の為に動いた人」と<br className="hidden md:block"/>言われること。
        </p>
        <div className="flex flex-col md:flex-row gap-12 text-gray-600 font-sans leading-relaxed">
          <div className="md:w-1/2">
             <p className="mb-6">
               私たちの根本にあるのは「利よりも義」という精神です。ビジネスにおいて利益は重要ですが、それが全てではありません。お客様にとって本当に正しい選択とは何か。その問いに対して、嘘偽りなく、誠実に向き合い続けることが私たちの誇りです。
             </p>
             <p>
               短期的な数字の追求ではなく、お客様の人生という長い物語に寄り添う「伴走者」でありたいと考えています。
             </p>
          </div>
          <div className="md:w-1/2">
             <p className="mb-6">
               ビジョンとして掲げるのは、知識を豊かにし、業界を越えて学び合える仲間を増やすこと。そして、人生設計に寄り添う伴走型の生涯アドバイザーを目指すことです。
             </p>
          </div>
        </div>
      </section>

      {/* The Referee Concept */}
      <section className="bg-charcoal text-off-white py-32 px-6 md:px-24 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            {/* Abstract line art representing court lines or balance */}
            <svg width="100%" height="100%">
               <line x1="10%" y1="10%" x2="90%" y2="90%" stroke="white" strokeWidth="1" />
               <circle cx="50%" cy="50%" r="20%" stroke="white" strokeWidth="1" fill="none" />
            </svg>
         </div>

         <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
               <span className="text-gold-accent text-xs uppercase tracking-[0.3em] mb-4 block">Background</span>
               <h2 className="font-serif text-4xl md:text-6xl mb-8">公正・中立</h2>
               <p className="font-sans text-gray-400 leading-loose mb-8">
                  代表の中川はバスケットボールの審判員としての経験を持っています。コート上での瞬時の判断、公平性の維持、感情に流されない冷静さ。これらは金融コンサルティングにおいても不可欠な要素です。
               </p>
               <p className="font-sans text-gray-400 leading-loose">
                  特定の金融機関に属さない「独立系」である私たちは、まさに審判のように中立的な立場から、お客様にとって最良の選択肢（商品）を、メーカー横断的にご提案します。
               </p>
            </div>
            <div className="flex justify-center">
               <div className="w-64 h-64 md:w-96 md:h-96 border border-gray-700 rounded-full flex items-center justify-center relative">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute w-full h-full border-t border-r border-gray-600 rounded-full"
                  />
                  <span className="font-serif text-2xl text-white">Fairness</span>
               </div>
            </div>
         </div>
      </section>

      {/* Strengths */}
      <section className="py-32 px-6 md:px-24 max-w-7xl mx-auto">
         <div className="text-center mb-24">
            <span className="text-gray-400 text-xs uppercase tracking-[0.3em]">Why Choose Us</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 text-charcoal">私の強み</h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
               { title: "Independent", head: "独立系の強み", desc: "特定の会社の商品に縛られず、各社横断的にお客様に合った商品を提案可能。ノルマのための提案は一切行いません。" },
               { title: "Long-term", head: "生涯の伴走者", desc: "大手企業のような異動や退職による担当変更がありません。長期間、お客様の人生に伴走し続けるフォローが可能です。" },
               { title: "Analytical", head: "分析と説明力", desc: "数字に強く、家計から事業まで精緻に分析。冷静な判断力と、お金のことを分かりやすく伝えるスキルに定評があります。" }
            ].map((item, idx) => (
               <div key={idx} className="bg-white p-12 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500 group">
                  <span className="text-gray-200 font-serif text-5xl mb-6 block group-hover:text-charcoal transition-colors duration-500">0{idx+1}</span>
                  <h3 className="font-serif text-xl mb-4 text-charcoal">{item.head}</h3>
                  <p className="font-sans text-sm text-gray-500 leading-relaxed">{item.desc}</p>
               </div>
            ))}
         </div>
      </section>
    </motion.div>
  );
};