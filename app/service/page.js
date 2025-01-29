'use client'
import Layout from "@/components/layout/Layout"
import AllServices from "@/components/sections/services/AllServices"
import PricingPlan from "@/components/sections/services/PricingPlan"
import TextSlider from "@/components/sections/services/TextSlider"
import Link from "next/link"
import { useState } from 'react'
export default function Service() {
    function isTest (name){
        return name;
    }
    const [isAccordion, setIsAccordion] = useState(1)
    const handleAccordion = (key) => {
        setIsAccordion(prevState => prevState === key ? null : key)
    }
    const [isTab, setIsTab] = useState(1)
    const handleTab = (i) => {
        setIsTab(i)
    }
    return (
        <>
            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Our Services">
                <div>
                    {/* Service m Tabs Start */}
                    <AllServices handleAccordion={handleAccordion} isAccordion={isAccordion} />
                    {/* Service m Tabs End */}
                    {/* Text SLider Start */}
                    <TextSlider />
                    {/* Text Slider End */}
                    {/* Pricing Plan Start */}
                    <PricingPlan isTab={isTab} handleTab={handleTab} />
                    {/* Pricing Plan End */}
                </div>
            </Layout>
        </>
    )
}