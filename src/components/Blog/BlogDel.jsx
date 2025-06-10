import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import blog from '../../assets/Career/blog1.png';
import uni from '../../assets/Career/uni.png';
import { Search, Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample article data that matches your NewsUI component
const sampleArticles = [
  {
    id: 1,
    date: "Mar 17, 2025",
    title: "Women Leading South Africa's Mining Renaissance",
    subtitle: "How female executives are transforming the mining sector in SA",
    category: "Women's Day",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
    readTime: "5 min read",
    content: [
      "From pioneering geologists to boardroom leaders, women have been instrumental in shaping South Africa's mining landscape. Today, they are breaking barriers as CEOs, mine managers, and innovative engineers who drive digital transformation across the sector.",
      "Notable leaders like Nolitha Fakude, former Sasol board member, and Nombasa Tsengwa, CEO of Exxaro Resources, represent a new generation of female executives redefining mining leadership. Their contributions span from sustainable mining practices to community development initiatives.",
      "From platinum mines in the Bushveld Complex to gold operations in Gauteng, women's growing presence in mining leadership, engineering, and sustainability is accelerating progress, fostering workplace inclusivity, and creating opportunities for the next generation of female miners.",
      "This transformation highlights how women are not just participating in South Africa's mining renaissance but actively leading it, setting new standards for safety, innovation, and community engagement."
    ],
    sectors: [
      {
        title: "Platinum Group Metals",
        content: [
          "Women now comprise 35% of the engineering workforce in South Africa's PGM sector, up from just 12% a decade ago. Leading companies like Anglo American Platinum and Impala Platinum are investing significantly in training female engineers and geologists.",
          "Through initiatives like 'Women in Mining SA', over 1,200 female professionals have received specialized training in platinum extraction and processing technologies. At Amplats, women constitute 32% of management positions, with technical roles showing the highest growth at 40%.",
          "Sibanye-Stillwater has invested R450 million in skills development programs specifically targeting women in PGM operations. The company's Kroondal mine achieved a milestone with 45% female representation in technical roles.",
          "According to Mining Weekly, women's representation in SA's PGM leadership could reach 40% by 2027, driven by targeted development programs and changing industry culture."
        ]
      },
      {
        title: "Gold Mining",
        content: [
          "South Africa's gold mining sector has seen remarkable progress with women now holding 28% of senior management positions across major operations.",
          "AngloGold Ashanti's Mponeng mine, one of the world's deepest gold mines, has pioneered women-inclusive underground operations with specialized training programs."
        ]
      }
    ]
  },
  {
    id: 2,
    date: "Jan 24, 2025",
    title: "Renewable Energy Boom in the Western Cape",
    subtitle: "Solar and wind investments driving South Africa's energy transition",
    category: "RENEWABLE ENERGY",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
    readTime: "4 min read",
    content: [
      "The Western Cape is experiencing an unprecedented renewable energy investment boom, with over R45 billion in new solar and wind projects approved in 2024 alone.",
      "International investors are flocking to the region, attracted by excellent wind and solar resources, stable regulatory framework, and world-class infrastructure. The province now generates 65% of its electricity from renewable sources.",
      "Major projects include the 540MW Dysselsdorp Wind Farm and the 400MW Kenhardt Solar Park, creating thousands of jobs and establishing South Africa as a renewable energy manufacturing hub.",
      "This green energy revolution is positioning the Western Cape as Africa's renewable energy capital and attracting global companies seeking sustainable operations."
    ],
    sectors: [
      {
        title: "Solar Power",
        content: [
          "The Western Cape's solar sector has attracted R28 billion in foreign investment, with companies like Scatec and Mainstream Renewable Power establishing major operations.",
          "The region's solar capacity has grown from 200MW to 3,200MW since 2020, with new projects adding 1,000MW annually. Local content requirements have spurred a manufacturing ecosystem.",
          "Atlantis Industrial Park has become a solar manufacturing hub, housing component manufacturers and creating over 5,000 direct jobs in renewable energy manufacturing.",
          "Grid-scale solar projects are now delivering electricity at R0.34/kWh, making renewable energy the cheapest source of new power generation in South Africa."
        ]
      },
      {
        title: "Wind Energy",
        content: [
          "The Western Cape's wind energy sector has doubled its capacity every two years since 2022, reaching 2,100MW of installed capacity.",
          "Vestas and Nordex have established regional service centers, providing maintenance for over 400 wind turbines across the province."
        ]
      }
    ]
  },
  {
    id: 3,
    date: "Feb 15, 2025",
    title: "Government's New Industrial Policy Framework 2025",
    subtitle: "Fresh incentives and support for manufacturing sectors",
    category: "MANUFACTURING",
    image: "https://images.unsplash.com/photo-1612810806695-30f7a8258391?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
    readTime: "6 min read",
    content: [
      "South Africa's new Industrial Policy Action Plan (IPAP) 2025 introduces game-changing incentives for manufacturing investment, targeting key sectors with enhanced support measures.",
      "The framework offers accelerated depreciation allowances, reduced corporate tax rates for manufacturers, and streamlined regulatory processes that cut approval times by 60%.",
      "Priority sectors including automotive, textiles, chemicals, and electronics manufacturing will benefit from dedicated industrial development zones with world-class infrastructure and logistics support.",
      "This comprehensive approach aims to restore South Africa's position as Africa's manufacturing hub while creating sustainable employment opportunities."
    ],
    sectors: [
      {
        title: "Automotive Manufacturing",
        content: [
          "The automotive sector receives preferential treatment under IPAP 2025, with tax incentives worth R15 billion over five years for vehicle and component manufacturers.",
          "Ford's R15.8 billion investment in Silverton Assembly Plant exemplifies the sector's growth potential, with production capacity increasing to 200,000 vehicles annually.",
          "Automotive export incentive schemes now provide 15% rebates on qualifying exports, while the Automotive Production Development Programme extends until 2035 with enhanced benefits.",
          "Major OEMs including BMW, Mercedes-Benz, and Toyota have committed R42 billion in new investments, creating 35,000 direct manufacturing jobs."
        ]
      },
      {
        title: "Chemicals and Petrochemicals",
        content: [
          "The chemicals sector benefits from reduced electricity tariffs and raw material import duty exemptions worth R8 billion annually.",
          "Sasol's gas-to-liquids expansion and new petrochemical plants in Richards Bay are attracting international chemical companies to establish regional operations."
        ]
      }
    ]
  },
  {
    id: 4,
    date: "Jan 16, 2025",
    title: "Fintech Revolution: Cape Town's Silicon Valley Moment",
    subtitle: "How South Africa is becoming Africa's fintech hub",
    category: "FINTECH",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
    readTime: "3 min read",
    content: [
      "Cape Town is experiencing a fintech boom that's transforming it into Africa's financial technology capital, with over 150 fintech startups establishing operations in the Mother City.",
      "International investment in South African fintech reached $2.8 billion in 2024, with companies like PayU, Ozow, and Yoco leading the charge in digital payments innovation.",
      "The city's combination of world-class telecommunications infrastructure, skilled developers, and progressive financial regulation creates an ideal environment for fintech innovation.",
      "Major global fintech companies are establishing African headquarters in Cape Town, attracted by the talent pool and regulatory sandbox environment."
    ],
    sectors: [
      {
        title: "Digital Payments",
        content: [
          "South Africa's digital payments market has grown 340% since 2020, with transaction volumes reaching R1.2 trillion annually through fintech platforms.",
          "Companies like Ozow have processed over R50 billion in transactions, while Yoco has enabled card payments for 150,000 small businesses across Africa.",
          "The Reserve Bank's regulatory sandbox has approved 45 fintech innovations, including cryptocurrency exchanges and buy-now-pay-later services.",
          "Mobile payment adoption has reached 78% among South African adults, the highest rate in Africa, creating opportunities for further fintech expansion."
        ]
      },
      {
        title: "Insurtech",
        content: [
          "South Africa's insurance technology sector has attracted R3.2 billion in investment, with companies like Root and Simply Financial leading innovation in digital insurance.",
          "Usage-based insurance products have grown 250% annually, offering personalized coverage through IoT devices and mobile apps."
        ]
      }
    ]
  },
  {
    id: 5,
    date: "Jan 15, 2025",
    title: "Automotive Exports Surge: SA's Manufacturing Success",
    subtitle: "Local automotive industry breaks export records",
    category: "AUTOMOTIVE",
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
    readTime: "7 min read",
    content: [
      "South Africa's automotive industry achieved record export performance in 2024, with vehicle and component exports reaching R201 billion, up 18% from the previous year.",
      "The sector's success stems from strategic investments in manufacturing capacity, skills development, and establishing South Africa as a preferred production base for global markets.",
      "Major automakers have expanded their South African operations to serve both domestic and export markets, particularly targeting Europe, Australia, and other African countries.",
      "This export surge demonstrates the competitiveness of South African manufacturing and its potential to drive economic growth through industrial exports."
    ],
    sectors: [
      {
        title: "Vehicle Manufacturing",
        content: [
          "South Africa produced 631,000 vehicles in 2024, with 387,000 units exported to 148 countries worldwide, generating R156 billion in export revenue.",
          "BMW's Rosslyn plant exports the X3 SUV globally, while Mercedes-Benz's East London facility produces C-Class vehicles for 60+ markets.",
          "Ford's Ranger bakkie dominates export markets across Europe and Australia, with Silverton Assembly Plant increasing production to meet global demand.",
          "Toyota's Prospecton plant exports Hilux, Fortuner, and Corolla Cross models to 40 African countries, establishing South Africa as Toyota's continental manufacturing hub."
        ]
      },
      {
        title: "Automotive Components",
        content: [
          "Component exports reached R45 billion in 2024, with catalytic converters, leather seats, and electronic systems leading export categories.",
          "Over 400 component manufacturers supply both local assembly plants and international OEMs, creating a robust automotive supply chain ecosystem."
        ]
      }
    ]
  },
  {
    id: 6,
    date: "Feb 14, 2025",
    title: "Platinum Group Metals: Investment Opportunities Ahead",
    subtitle: "SA's strategic advantage in global PGM markets",
    category: "MINING",
    image: "https://images.unsplash.com/photo-1503376784553-8e9df0f5b70d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
    readTime: "4 min read",
    content: [
      "South Africa holds 75% of global platinum reserves and dominates PGM production, creating unique investment opportunities as demand grows from automotive and hydrogen economy applications.",
      "Rising demand for catalytic converters and fuel cell technology is driving platinum prices higher, while new mining technologies improve extraction efficiency and reduce costs.",
      "International investors are recognizing South Africa's strategic position in the global PGM supply chain, leading to increased foreign investment in mining operations and beneficiation facilities.",
      "The government's Mining Charter III and infrastructure investments in the Bushveld Complex create a favorable environment for sustainable PGM mining investments."
    ],
    sectors: [
      {
        title: "Platinum Mining",
        content: [
          "South Africa produces 70% of global platinum supply, with the Bushveld Complex containing the world's largest platinum reserves estimated at 63 million ounces.",
          "Anglo American Platinum, Sibanye-Stillwater, and Impala Platinum have invested R67 billion in modernizing operations and expanding production capacity.",
          "New mining technologies including automated drilling and AI-powered ore sorting have increased productivity by 23% while improving safety standards.",
          "Platinum demand from hydrogen fuel cells is projected to grow 400% by 2030, creating long-term growth opportunities for South African producers."
        ]
      },
      {
        title: "Beneficiation",
        content: [
          "Local PGM beneficiation has grown 180% since 2020, with companies like Heraeus and Johnson Matthey establishing processing facilities near mines.",
          "The government's beneficiation incentives include reduced export taxes for processed PGMs and infrastructure support for downstream operations."
        ]
      }
    ]
  },
  {
    id: 7,
    date: "Feb 13, 2025",
    title: "Agri-Processing Zones: Unlocking Rural Investment",
    subtitle: "New agricultural processing hubs create job opportunities",
    category: "AGRICULTURE",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
    readTime: "5 min read",
    content: [
      "South Africa's new Agri-Processing Special Economic Zones are transforming rural economies by creating integrated value chains from farm to export market.",
      "These zones offer world-class infrastructure, tax incentives, and streamlined regulations to attract food processing investments that create jobs in rural communities.",
      "Major international food companies are establishing operations in these zones, leveraging South Africa's agricultural abundance and strategic location for African market access.",
      "The initiative supports government objectives of rural development, food security, and agricultural export growth while creating sustainable employment opportunities."
    ],
    sectors: [
      {
        title: "Fruit Processing",
        content: [
          "The Western Cape Agri-Processing Zone has attracted R8.5 billion in fruit processing investments, with companies like Ceres Fruit Processors expanding operations.",
          "Citrus processing capacity has doubled to handle increased exports to Asia and Europe, while apple and pear processing serves both domestic and export markets.",
          "Cold storage facilities with 2.5 million tons capacity support year-round processing and export operations, extending shelf life and market reach.",
          "Fruit processing creates 15,000 direct jobs and supports 45,000 farm workers, demonstrating the sector's rural development impact."
        ]
      },
      {
        title: "Grain and Oilseeds",
        content: [
          "The Free State Agri-Processing Zone focuses on grain and oilseed processing, with Tiger Brands and Premier Foods establishing major operations.",
          "Soybean crushing capacity has increased 340% to serve growing demand for protein meal in poultry and livestock feed markets."
        ]
      }
    ]
  },
  {
    id: 8,
    date: "Feb 12, 2025",
    title: "Tourism Recovery: SA's Hospitality Sector Rebounds",
    subtitle: "International visitor numbers reach pre-pandemic levels",
    category: "TOURISM",
    image: "https://images.unsplash.com/photo-1605727218323-013b9c9a1c9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
    readTime: "3 min read",
    content: [
      "South Africa's tourism sector has achieved a remarkable recovery, with international visitor arrivals reaching 11.2 million in 2024, surpassing pre-pandemic levels by 8%.",
      "The hospitality industry has responded with R45 billion in new investments, including luxury resorts, conference facilities, and adventure tourism infrastructure.",
      "International hotel chains are expanding their South African footprint, while domestic tourism has grown 23% as South Africans rediscover local destinations.",
      "This recovery demonstrates the resilience of South Africa's tourism sector and its importance as a major employer and foreign exchange earner."
    ],
    sectors: [
      {
        title: "Luxury Tourism",
        content: [
          "South Africa's luxury tourism market has grown 156% since 2022, with high-end safari lodges and wine estate experiences leading growth.",
          "International luxury brands including Four Seasons, Aman, and Rosewood have announced new South African properties worth R12 billion combined.",
          "Private game reserves in the Greater Kruger area have achieved 95% occupancy rates, with international guests paying premium rates for exclusive safari experiences.",
          "Wine tourism has expanded beyond traditional routes, with craft distilleries and food experiences attracting affluent travelers seeking authentic experiences."
        ]
      },
      {
        title: "Conference Tourism",
        content: [
          "Cape Town International Convention Centre has secured 89 major international conferences for 2025-2027, generating an estimated R8.7 billion in economic impact.",
          "New conference facilities in Johannesburg and Durban have increased South Africa's capacity to host large international events and exhibitions."
        ]
      }
    ]
  }
];

const BlogDel = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch the article data from an API using the id
    const foundArticle = sampleArticles.find(article => article.id === parseInt(id));
    setArticle(foundArticle);
    setLoading(false);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!article) {
    return <div className="min-h-screen flex items-center justify-center">Article not found</div>;
  }

  return (
    <div className="min-h-screen w-[95%] mx-auto bg-gray-50">
      {/* Back Button */}
      <div className="pt-6 pb-4">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Articles
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left - Main Content */}
            <div className="md:w-[70%]">
              {/* Article Header */}
              <div className="mb-6">
                <span className="text-sm font-medium px-3 py-1 bg-red-100 text-red-600 rounded-full">
                  {article.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2 text-gray-900">
                  {article.title}
                </h1>
                <div className="flex items-center gap-4 text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">{article.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">{article.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Article Image */}
              <div className="mb-8 rounded-xl overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
              </div>

              {/* Article Content */}
              <div className="prose max-w-none">
                {article.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}

                {/* Focus Sectors */}
                <div className="mt-12">
                  <div className="mb-8">
                    <div className="bg-red-600 text-white px-4 py-3 rounded-t-lg inline-block">
                      <h2 className="text-lg font-bold">GHANA'S FOCUS SECTORS</h2>
                    </div>
                  </div>

                  {article.sectors.map((sector, index) => (
                    <div key={index} className="mb-12">
                      <div className="border-l-4 border-blue-500 pl-4 mb-6">
                        <h3 className="text-2xl font-bold text-blue-700">
                          {sector.title}
                        </h3>
                      </div>
                      
                      {sector.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-gray-700 leading-relaxed mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Sidebar */}
            <div className="md:w-[30%]">
              {/* Author/Info Card */}
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
                <div className="text-center mb-4 flex flex-col items-center justify-center">
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    We are Ghana national Investment facilitation agency.
                  </p>
                  <img src={uni} alt="Ghana Investment" className="mb-4" />
                  <p className="text-sm text-gray-600 leading-relaxed">
                    For further queries on this subject, please get in touch with us at Ghana.
                  </p>
                </div>

                <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-full transition-colors mt-4">
                  RAISE YOUR QUERY
                </button>

                {/* Related Articles */}
                <div className="mt-8">
                  <h3 className="font-semibold text-lg mb-4 border-b pb-2">Related Articles</h3>
                  {sampleArticles
                    .filter(a => a.id !== article.id)
                    .slice(0, 3)
                    .map(related => (
                      <div key={related.id} className="mb-4 pb-4 border-b border-gray-100 last:border-b-0">
                        <Link 
                          to={`/blogdetail/${related.id}`} 
                          className="group"
                        >
                          <h4 className="text-sm font-medium text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                            {related.title}
                          </h4>
                          <div className="flex items-center text-xs text-gray-500">
                            <Calendar className="h-3 w-3 mr-1" />
                            {related.date}
                          </div>
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDel;