import React from 'react';
import { motion } from 'framer-motion';
import { PageHero } from '../components/pagehero';

export const Company: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-off-white"
    >
      <PageHero title="Company" subtitle="Who We Are" jpTitle="会社概要" />

      {/* Representative Message */}
      <section className="max-w-4xl mx-auto px-6 md:px-24 py-24 mb-12">
        <div className="flex flex-col md:flex-row items-start gap-12">
           <div className="md:w-1/3">
              {/* Placeholder for Portrait if available, using a typographic placeholder for now */}
              <div className="w-full h-80 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                 <span className="font-serif text-6xl text-gray-200 vertical-rl">Nakagawa</span>
              </div>
              <div className="mt-4">
                 <p className="font-serif text-xl">中川 達也</p>
                 <p className="text-xs uppercase text-gray-500 tracking-widest mt-1">Tatsuya Nakagawa</p>
                 <p className="text-xs text-gray-400 mt-4">代表取締役</p>
              </div>
           </div>
           <div className="md:w-2/3">
              <h3 className="font-serif text-2xl mb-8">誠実さと寄り添う力で、<br/>人生の伴走者に。</h3>
              <div className="space-y-6 text-gray-600 font-sans leading-loose text-justify">
                 <p>
                    2026年の設立以来、私たちは「利よりも義」を信条に、お客様一人ひとりの人生設計に深く寄り添ってまいりました。
                 </p>
                 <p>
                    金融コンサルティングの世界は、時に複雑で分かりにくいものです。だからこそ、私は「分かりやすく伝える」こと、そして「公正・中立」であることを何よりも大切にしています。バスケットボールの審判員として培った冷静な判断力と公平性は、私のビジネスにおける羅針盤でもあります。
                 </p>
                 <p>
                    独立系である強みを活かし、特定の組織の論理に縛られることなく、本当にお客様のためになるご提案をお約束します。世代を超えて、生涯にわたり頼りにされる存在を目指してまいります。
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* Company Data */}
      <section className="bg-white py-24 px-6 md:px-24 border-t border-gray-100">
         <div className="max-w-4xl mx-auto">
            <h3 className="font-serif text-3xl mb-12 text-center md:text-left">Overview</h3>
            <div className="grid grid-cols-1 gap-0 border-t border-gray-200">
               {[
                  { label: "会社名", value: "compassion consulting株式会社" },
                  { label: "英語表記", value: "compassion consulting Inc." },
                  { label: "代表者", value: "代表取締役　中川 達也" },
                  { label: "設立", value: "2026年" },
                  { label: "所在地", value: "〒185-0012 東京都国分寺市4-1-40" },
                  { label: "事業内容", value: "金融コンサルティング、財務・会計コンサルティング、営業コンサルティング、各種セミナー開催" },
                  { label: "従業員数", value: "1名" },
                  { label: "連絡先", value: "080-1122-7217 / nakagawa@compassion-c.com" }
               ].map((row, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row py-6 border-b border-gray-200 group hover:bg-gray-50 transition-colors duration-300 px-4">
                     <dt className="md:w-1/3 text-xs uppercase tracking-widest text-gray-500 font-sans py-1">{row.label}</dt>
                     <dd className="md:w-2/3 font-serif text-charcoal">{row.value}</dd>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Google Map (Placeholder aesthetic) */}
      <section className="h-[400px] w-full bg-gray-200 relative overflow-hidden grayscale">
         <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.825686867375!2d139.4800!3d35.6960!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQxJzQ1LjYiTiAxMznCsDI4JzQ4LjAiRQ!5e0!3m2!1sja!2sjp!4v1600000000000!5m2!1sja!2sjp" 
           width="100%" 
           height="100%" 
           style={{ border: 0, filter: 'grayscale(100%) contrast(1.2)' }} 
           allowFullScreen={true} 
           loading="lazy"
           title="Office Location"
         ></iframe>
         <div className="absolute inset-0 bg-charcoal mix-blend-overlay opacity-20 pointer-events-none"></div>
      </section>

    </motion.div>
  );
};