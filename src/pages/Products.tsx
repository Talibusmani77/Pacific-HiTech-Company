import ProductModal from '@/components/ProductModal';
import { productsList } from '@/data/content';
import { useTranslation } from '@/hooks/useTranslation';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
    const t = useTranslation();

    const [selectedProduct, setSelectedProduct] = React.useState<typeof productsList[0] | null>(null);

    return (
        <div className="min-h-screen bg-industrial-slate-50">
            {/* Page Header */}
            <section className="bg-industrial-slate-900 text-white py-20 lg:pt-48 lg:pb-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/hero/range.webp"
                        alt="Products Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>
                <div className="container-custom relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                    >
                        {t.products.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/80 max-w-2xl mx-auto"
                    >
                        {t.products.subtitle}
                    </motion.p>
                </div>
            </section>

            {/* Product Grid */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {productsList.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl overflow-hidden shadow-lg border border-industrial-slate-100 group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="h-64 relative overflow-hidden bg-industrial-slate-100">
                                    {/* Product Image */}
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Overlay with View Details Button */}
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <button
                                            onClick={() => setSelectedProduct(product)}
                                            className="btn-primary flex items-center space-x-2 transform scale-90 group-hover:scale-100 transition-transform duration-300"
                                        >
                                            <span>{t.products.viewDetails}</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-h3 font-semibold text-industrial-slate-900 mb-4 group-hover:text-cta-blue transition-colors">
                                        {product.name}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact CTA */}
                    <div className="mt-20 text-center bg-white p-12 rounded-2xl shadow-sm border border-industrial-slate-200">
                        <h2 className="text-h2 font-bold text-industrial-slate-900 mb-6">{t.home.needSolution}</h2>
                        <p className="text-industrial-slate-600 mb-8 max-w-xl mx-auto">
                            Can't find what you're looking for? Reach out to our team for custom fabrication and specific product inquiries.
                        </p>
                        <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
                            <span>{t.nav.contact}</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Product Details Modal */}
            <ProductModal
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </div>
    );
};

export default Products;
