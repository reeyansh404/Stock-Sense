import { useEffect, useState } from "react";
import { Bell, Palette, Shield, Moon, Sun } from "lucide-react";

export default function Settings() {
    const [emailNotifications, setEmailNotifications] = useState(false);
    const [theme, setTheme] = useState('light');
    const [priceAlerts, setPriceAlerts] = useState(false);
    const [currency, setCurrency] = useState('AUD');

    //Load them from local storage on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        applyTheme(savedTheme);  // ← FIXED: changed from appleTheme to applyTheme
    }, []);

    //Apply theme to the document
    const applyTheme = (newTheme) => {
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    //Handle theme change
    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    };

    const handleSaveChanges = () => {
        console.log('Settings saved:', {
            emailNotifications,
            priceAlerts,
            theme,
            currency
        });
        alert("Settings saved successfully!");
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200 p-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        Settings
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Configure your dashboard preferences
                    </p>
                </div>

                {/* Notification Settings */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
                    <div className="flex items-center gap-2 mb-6">
                        <Bell className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Notifications
                        </h2>
                    </div>

                    {/* Email Notifications */}
                    <div className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700">
                        <div>
                            <h3 className="font-medium text-gray-900 dark:text-white">
                                Email Notifications
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Receive updates via email
                            </p>
                        </div>
                        <button
                            onClick={() => setEmailNotifications(!emailNotifications)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                emailNotifications ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                            }`}
                        >
                            <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                    emailNotifications ? 'translate-x-6' : 'translate-x-1'
                                }`}
                            />
                        </button>
                    </div>

                    {/* Price Alerts */}
                    <div className="flex items-center justify-between py-4">
                        <div>
                            <h3 className="font-medium text-gray-900 dark:text-white">
                                Price Alerts
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Stock price movement notifications
                            </p>
                        </div>
                        <button
                            onClick={() => setPriceAlerts(!priceAlerts)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                priceAlerts ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                            }`}
                        >
                            <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                    priceAlerts ? 'translate-x-6' : 'translate-x-1'
                                }`}
                            />
                        </button>
                    </div>
                </div>

                {/* Display Settings */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
                    <div className="flex items-center gap-2 mb-6">
                        <Palette className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Display
                        </h2>
                    </div>

                    {/* Theme Selection */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-900 dark:text-white mb-3">
                            Theme
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={() => handleThemeChange('light')}
                                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${
                                    theme === 'light'
                                        ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                                        : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
                                }`}
                            >
                                <Sun className="w-5 h-5" />
                                <span className="font-medium text-gray-900 dark:text-white">Light</span>
                            </button>
                            <button
                                onClick={() => handleThemeChange('dark')}
                                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${
                                    theme === 'dark'
                                        ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                                        : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
                                }`}
                            >
                                <Moon className="w-5 h-5" />
                                <span className="font-medium text-gray-900 dark:text-white">Dark</span>
                            </button>
                        </div>
                    </div>

                    {/* Default Currency*/}
                    <div>
                        <label className="block text-sm font-medium text-gray-900 dark:text-white mb-3">
                            Default Currency  {/* ← FIXED: typo "Defalt" to "Default" */}
                        </label>
                        <select
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="AUD">Australian Dollar (AUD)</option>
                            <option value="USD">US Dollar (USD)</option>
                            <option value="EUR">Euro (EUR)</option>
                            <option value="GBP">British Pound (GBP)</option>
                            <option value="JPY">Japanese Yen (JPY)</option>
                        </select>
                    </div>
                </div>

                {/* Security Section */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
                    <div className="flex items-center gap-2 mb-6">
                        <Shield className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Security
                        </h2>
                    </div>

                    <div className="space-y-3">
                        <button className="w-full text-left px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white transition-colors">
                            Change Password  {/* ← FIXED: "Change Button" to "Change Password" */}
                        </button>
                        <button className="w-full text-left px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white transition-colors">
                            Two-Factor Authentication
                        </button>
                        <button className="w-full text-left px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white transition-colors">
                            Privacy Settings
                        </button>
                    </div>
                </div>

                {/* Save Changes Button */}
                <div className="flex justify-end">
                    <button
                        onClick={handleSaveChanges}
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}