import React from 'react';
import { HelpCircle, Mail, AlertTriangle } from 'lucide-react';

export default function Help() {
    return (
        <div className='min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors p-4 md:p-6'>
            <div className='max-w-7xl mx-auto'>
                {/* Page Header */}
                <div className='mb-6 md:mb-8'>
                    <h1 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2'>
                        Help & Support
                    </h1>
                    <p className='text-gray-600 dark:text-gray-400'>
                        Get assistance with Stock Sense
                    </p>
                </div>
                {/* Help Options */}
                <div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6'>
                    <div className='flex items-start gap-3'>
                        <div className='w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center'>
                            <HelpCircle className='w-5 h-5 text-gray-700 dark:text-gray-200' />
                        </div>

                        <div>
                            <h2 className='text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3'>
                                About This Dashboard
                            </h2>

                            <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-3'>
                                Stock Sense helps you track markets, manage a portfolio, and stay updated with
                                financial news. Some features may use third-party APIs, so live data can sometimes
                                be delayed or temporarily unavailable.
                            </p>

                            <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                                Use the top menu to navigate between Dashboard, Markets, Portfolio, and News.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Investment Warnings */}
                <div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6'>
                    <div className='rounded-xl border border-yellow-300/80 dark:border-yellow-500/40 bg-yellow-50 dark:bg-yellow-900/20 p-5'>
                        <div className='flex items-start gap-3'>
                            <div className='w-10 h-10 rounded-xl bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center'>
                                <AlertTriangle className='w-5 h-5 text-yellow-700 dark:text-yellow-300' />
                            </div>

                            <div>
                                <h3 className='text-lg font-semibold text-yellow-900 dark:text-yellow-200 mb-2'>
                                    Investment Warning
                                </h3>
                                <p className='text-yellow-800 dark:text-yellow-200/90 leading-relaxed'>
                                    All predictions and analysis are for informational purposes only and are not
                                    financial advice. Always do your own research before investing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Support */}
                <div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6'>
                    <div className='flex items-center gap-3 mb-5'>
                        <div className='w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center'>
                            <Mail className='w-5 h-5 text-gray-700 dark:text-gray-200'/>
                        </div>
                        <h2 className='text-lg md:text-xl font-semibold text-gray-900 dark:text-white'>
                            Contact Support 
                        </h2>
                    </div>

                    <div className='bg-gray-50 dark:bg-gray-700/40 border border-gray-200 dark:border-gray-700 rounded-xl p-5 flex items-center gap-4'>
                        <div className='w-10 h-10 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center'>
                            <Mail className='w-5 h-5 text-gray-700 dark:text-gray-200'/>
                        </div>

                        <div>
                            <div className='font-semibold text-gray-900 dark:text-white'>
                                Email
                            </div>
                            <div className='text-gray-600 dark:text-gray-300 text-sm'>
                                support@stocksense.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}