import React from 'react';
import { motion } from 'framer-motion';
import { PageHero } from '../components/PageHero';
import { Check } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const categories = [
    {
      id: "personal",
      title: "For Personal",
      jpTitle: "家計向け・個人資産",
      desc: "家計の見直しから資産形成まで、個人のライフステージに合わせた最適なプランニングを行います。",
      items: [
        "公的機関への支出（国保、年金、住民税等）の削減提案",
        "生命保険・損害保険の適正化・見直し提案",
        "固定費（通信費、光熱費等）の見直し提案",
        "国外プライベートバンクの活用提案",
        "国内外積立商品・ファンドの選定",
        "相続対策・生前贈与プランニング",
        "個人向け「経済学・マネーセミナー」の開催"
      ]
    },
    {
      id: "business",
      title: "For Business",
      jpTitle: "企業向け・財務コンサル",
      desc: "経営の安定化と成長を支援するための、財務・会計・コスト削減の具体的施策を提案します。",
      items: [
        "固定費の徹底的な見直しと削減提案",
        "節税情報の提供と実行支援",
        "会計処理の適正化アドバイス",
        "福利厚生の一環としての「金融セミナー」開催",
        "事業収支分析・予実管理サポート",
        "目標管理コンサルティング（営業・財務）"
      ]
    },
    {
      id: "assets",
      title: "Asset Management",
      jpTitle: "資産運用・投資",
      desc: "守りながら増やす。リスクを管理し、世界中の投資機会から最適なポートフォリオを構築します。",
      items: [
        "国外プライベートバンク口座開設サポート",
        "国内外の生命保険を活用した資産形成",
        "国内ファンド・投資信託の分析・選定",
        "不動産投資コンサルティング",
        "暗号資産（クリプト）投資のアドバイス",
        "長期分散投資によるリスクヘッジ"
      ]
    },
    {
      id: "exit",
      title: "Exit Strategy",
      jpTitle: "出口戦略・承継",
      desc: "築き上げた資産や事業を、次世代へ確実に、そして想いと共に繋ぐための戦略を立案します。",
      items: [
        "相続税対策と納税資金の確保",
        "企業の出口戦略（M&A、IPO、清算）",
        "事業承継計画の策定と実行支援",
        "資産の組み換えによる評価額対策"
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-off-white"
    >
      <PageHero title="Services" subtitle="What We Do" jpTitle="事業内容" />

      <div className="max-w-7xl mx-auto px-6 md:px-24 pb-32">
        <div className="space-y-32">
          {categories.map((cat, idx) => (
            <motion.div 
              key={cat.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row gap-12 md:gap-24 border-t border-gray-200 pt-16"
            >
              <div className="md:w-1/3">
                <span className="text-4xl font-serif text-gray-200 block mb-4">0{idx + 1}</span>
                <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-2">{cat.title}</h2>
                <p className="text-sm font-sans text-gray-500 tracking-wider uppercase mb-6">{cat.jpTitle}</p>
                <p className="text-gray-600 leading-relaxed font-sans">{cat.desc}</p>
              </div>

              <div className="md:w-2/3">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3 group">
                      <div className="mt-1 w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-charcoal group-hover:bg-charcoal transition-colors duration-300">
                        <Check className="w-3 h-3 text-transparent group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-gray-700 font-sans group-hover:text-charcoal transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};