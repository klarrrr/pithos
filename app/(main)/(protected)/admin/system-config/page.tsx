"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import InputTextField from "@/components/technical-components/InputTextField";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getSystemConfig, saveSystemConfig, SystemConfig } from "./system-config-settings";

/**
 * System Configuration Page
 * This is the primary UI (front-end) for managing system-wide settings.
 * It uses Server Actions (system-config-settings.ts) to interact with the database.
 */
const Page = () => {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [config, setConfig] = useState<SystemConfig>({
        max_login_attempts: 3,
        min_char_length: 12,
        min_uppercase: 1,
        min_lowercase: 1,
        min_numbers: 1,
        min_spec_chars: 1
    });

    // Fetch initial configuration on load
    useEffect(() => {
        const fetchConfig = async () => {
            const { data, error } = await getSystemConfig();
            if (error) {
                toast.error(`Error loading configuration: ${error}`);
            } else if (data) {
                setConfig(data);
            }
            setLoading(false);
        };
        fetchConfig();
    }, []);

    const handleSave = async () => {
        setSaving(true);
        try {
            // Client-side Validations with Hard Minimums
            if (config.max_login_attempts < 3) {
                toast.error("Login attempts must be at least 3");
                setSaving(false);
                return;
            }
            if (config.min_char_length < 12) {
                toast.error("Password length must be at least 12");
                setSaving(false);
                return;
            }
            if (config.min_uppercase < 1 || config.min_lowercase < 1 ||
                config.min_numbers < 1 || config.min_spec_chars < 1) {
                toast.error("Password complexity rules must be at least 1");
                setSaving(false);
                return;
            }

            const result = await saveSystemConfig(config);

            if (result.success) {
                toast.success("System configuration saved successfully!");
            } else {
                toast.error(`Failed to save configuration: ${result.error}`);
            }
        } catch (err: any) {
            console.error("Save error:", err);
            toast.error("An unexpected error occurred while saving.");
        } finally {
            setSaving(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setConfig(prev => ({
            ...prev,
            [name]: parseInt(value) || 0
        }));
    };

    if (loading) {
        return <div className="p-8">Loading configuration...</div>;
    }

    return (
        <div className='flex flex-col p-4 bg-background w-full gap-4'>

            {/* Header */}
            <div className="flex flex-row justify-between">
                <h1 className='font-bold text-3xl'>System Config</h1>
            </div>

            <hr />

            {/* Content Container */}
            <div className="flex gap-4 flex-col min-h-0 overflow-y-auto">

                {/* Login and Password */}
                <div className='flex gap-4'>

                    {/* Title */}
                    <div className='flex flex-col gap-4 w-1/4 sticky top-0 h-fit bg-primary-foreground border border-muted rounded-lg p-4'>
                        <h1 className='font-bold text-2xl'>Login and Password</h1>
                        <p>Customize the login and password constraints for a better security.</p>
                        <Button
                            variant={"default"}
                            className="w-fit self-end"
                            onClick={handleSave}
                            disabled={saving}
                        >
                            {saving ? "Saving..." : "Save"}
                        </Button>
                    </div>

                    {/* Interactable Content */}
                    <div className='flex flex-col gap-4 w-3/4'>

                        {/* Login Attempts */}
                        <div className='flex flex-col gap-4 w-full p-4 bg-primary-foreground border border-muted rounded-lg'>

                            {/* Login Content */}

                            <div className="flex flex-col gap-4">

                                {/* Title */}
                                <h2 className='font-semibold flex gap-2 text-xl items-center'>Login</h2>
                                <hr />

                                {/* Login Attempts */}
                                <Card className="flex flex-col gap-4 p-4">
                                    <h3 className="font-medium">Login Attempts</h3>
                                    <InputTextField
                                        name="max_login_attempts"
                                        type="number"
                                        min={3}
                                        value={config.max_login_attempts}
                                        onChange={handleChange}
                                        placeholder="Enter the maximum number of login attempts"
                                    />
                                    <p className="text-sm text-accent">Note: Minimum of 3 Login Attempts only</p>
                                </Card>

                                <hr />
                            </div>

                            {/* Password Content */}

                            <div className="flex flex-col gap-4">

                                {/* Title */}
                                <h2 className='font-semibold flex gap-2 text-xl items-center'>Password</h2>
                                <hr />

                                {/* Compiled Content */}
                                <div className="flex flex-col gap-4">
                                    {/* Character Length */}
                                    <Card className="flex flex-col gap-4 p-4">
                                        <h3 className="font-medium">Character Length</h3>
                                        <InputTextField
                                            name="min_char_length"
                                            type="number"
                                            min={12}
                                            value={config.min_char_length}
                                            onChange={handleChange}
                                            placeholder="Enter minimum length of password"
                                        />
                                        <p className="text-sm text-accent">Note: Minimum of at least 12 characters</p>
                                    </Card>

                                    {/* Capital Letter */}
                                    <Card className="flex flex-col gap-4 p-4">
                                        <h3 className="font-medium">Capital Letters</h3>
                                        <InputTextField
                                            name="min_uppercase"
                                            type="number"
                                            min={1}
                                            value={config.min_uppercase}
                                            onChange={handleChange}
                                            placeholder="Enter number of minimum capital letters"
                                        />
                                        <p className="text-sm text-accent">Note: Minimum of at least 1 capital letter</p>
                                    </Card>

                                    {/* Small Letters */}
                                    <Card className="flex flex-col gap-4 p-4">
                                        <h3 className="font-medium">Small Letters</h3>
                                        <InputTextField
                                            name="min_lowercase"
                                            type="number"
                                            min={1}
                                            value={config.min_lowercase}
                                            onChange={handleChange}
                                            placeholder="Enter number of minimum small letters"
                                        />
                                        <p className="text-sm text-accent">Note: Minimum of at least 1 small letter</p>
                                    </Card>

                                    {/* Numbers */}
                                    <Card className="flex flex-col gap-4 p-4">
                                        <h3 className="font-medium">Numbers</h3>
                                        <InputTextField
                                            name="min_numbers"
                                            type="number"
                                            min={1}
                                            value={config.min_numbers}
                                            onChange={handleChange}
                                            placeholder="Enter number of minimum numbers"
                                        />
                                        <p className="text-sm text-accent">Note: Minimum of at least 1 number</p>
                                    </Card>

                                    {/* Special Characters */}
                                    <Card className="flex flex-col gap-4 p-4">
                                        <h3 className="font-medium">Special Characters</h3>
                                        <InputTextField
                                            name="min_spec_chars"
                                            type="number"
                                            min={1}
                                            value={config.min_spec_chars}
                                            onChange={handleChange}
                                            placeholder="Enter number of minimum special characters"
                                        />
                                        <p className="text-sm text-accent">Note: Minimum of at least 1 special character</p>
                                    </Card>
                                </div>

                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
