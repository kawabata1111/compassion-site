import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ServiceItem = ({ 
  num, 
  title, 
  subtitle, 
  items, 
  isOpen, 
  onClick 
}: { 
  num: string, 
  title: string, 
  subtitle: string, 
  items: string[], 
  isOpen: boolean, 
  onClick: () => void 
}) => {
  return (
    <motion.div 
      initial={false}
      className={`border-b border-gray-200 cursor-pointer group ${isOpen ? 'bg-gray-50' : 'bg-transparent'}`}
      onClick={onClick}
    >
      <div className="py-12 md:py-16 px-4 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center transition-all duration-500">
        <div className="flex items-baseline space-x-8 md:space-x-16">
          <span className="font-serif text-xl text-gray-300 group-hover:text-charcoal transition-colors duration-300">{num}</span>
          <div className="flex flex-col">
            <h3 className="font-serif text-3xl md:text-5xl text-charcoal mb-2 group-hover:translate-x-2 transition-transform duration-500">{title}</h3>
            <span className="text-xs uppercase tracking-widest text-gray-500">{subtitle}</span>
          </div>
        </div>
        
        <div className={`mt-6 md:mt-0 transition-transform duration-500 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
          <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-charcoal" strokeWidth={1} />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-16 pl-12 md:pl-40 pr-4 md:pr-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {items.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center border-l border-gray-200 pl-4 py-2 hover:border-charcoal transition-colors duration-300"
                  >
                    <span className="font-sans text-sm text-gray-600">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const Services: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 md:py-48 px-6 md:px-24 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 block mb-6">Our Expertise</span>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-tight">
            Service Offerings
          </h2>
        </div>
        <p className="text-right font-serif text-gray-400 italic mt-4 md:mt-0">
          Tailored solutions for every stage of life.
        </p>
      </div>

      <div className="flex flex-col border-t border-gray-200">
        <ServiceItem 
          num="01"
          title="Personal" 
          subtitle="家計見直し・資産形成"
          isOpen={openIndex === 0}
          onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
          items={[
            "支出削減提案（公的機関・固定費）", 
            "保険の見直し提案",
            "国外プライベートバンク活用",
            "国内外積立商品・ファンド",
            "相続対策・承継プランニング",
            "個人向け経済学・マネーセミナー"
          ]}
        />
        <ServiceItem 
          num="02"
          title="Business" 
          subtitle="企業財務・コンサルティング"
          isOpen={openIndex === 1}
          onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
          items={[
            "固定費見直し・コスト削減",
            "節税情報提供・会計処理アドバイス",
            "企業出口戦略（M&A・事業承継）",
            "福利厚生向け金融セミナー開催",
            "事業収支分析・予実管理",
            "目標管理コンサルティング"
          ]}
        />
        <ServiceItem 
          num="03"
          title="Assets" 
          subtitle="多様な投資・運用サポート"
          isOpen={openIndex === 2}
          onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}
          items={[
            "不動産投資コンサルティング",
            "暗号資産（クリプト）投資",
            "国内外生命保険の活用",
            "長期分散投資戦略",
            "資産ポートフォリオ構築",
            "リスク管理と分散効果の最大化"
          ]}
        />
      </div>
    </section>
  );
};