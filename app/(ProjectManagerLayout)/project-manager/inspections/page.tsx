"use client"

import { useState } from "react"
import InspectionDetail from "@/components/superintendent/inspections/Inspectiondetail"
import StartInspectionForm, { PHASE_CHECKLISTS, PHASE_CODES } from "@/components/project-manager/inspections/Startinspectionform"
import { InspectionItemState, InspectionRecord, StartInspectionFormValues } from "@/types/inspection-types"

function initials(name: string) {
    return name
        .trim()
        .split(/\s+/)
        .map((part) => part[0])
        .join("")
        .toUpperCase()
        .slice(0, 3)
}

function today() {
    return new Date().toISOString().slice(0, 10)
}

let sequence = 2

function buildRecord(values: StartInspectionFormValues): InspectionRecord {
    const phase = values.phase as Exclude<StartInspectionFormValues["phase"], "">
    sequence += 1
    const code = `PB-26-${String(sequence).padStart(4, "0")}-${PHASE_CODES[phase]}-002`

    const items: InspectionItemState[] = PHASE_CHECKLISTS[phase].map((template) => ({
        id: template.id,
        label: template.label,
        dateInspected: today(),
        quality: "",
        vendor: "Unassigned",
        deficiencyDescription: "",
        photoName: null,
    }))

    return {
        code,
        jobAddress: values.jobAddress,
        clientName: values.clientName,
        inspector: values.inspector ? initials(values.inspector) : "",
        date: today(),
        phase,
        items,
        locked: false,
    }
}

export default function InspectionsPage() {
    const [record, setRecord] = useState<InspectionRecord | null>(null)

    function handleStart(values: StartInspectionFormValues) {
        setRecord(buildRecord(values))
    }

    function handleUpdateItem(itemId: string, patch: Partial<InspectionItemState>) {
        setRecord((prev) => {
            if (!prev) return prev
            return {
                ...prev,
                items: prev.items.map((item) => (item.id === itemId ? { ...item, ...patch } : item)),
            }
        })
    }

    return (
        <div className="min-h-screen bg-[#F7F4EF] p-4 text-[#111111] sm:p-6 lg:p-8">
            <div className="space-y-6">
                {!record ? (
                    <StartInspectionForm onStart={handleStart} />
                ) : (
                    <InspectionDetail record={record} onUpdateItem={handleUpdateItem} onBack={() => setRecord(null)} />
                )}
            </div>
        </div>
    )
}
