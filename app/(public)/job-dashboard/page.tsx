"use client"

import { useState } from "react"

import JobsList from "@/components/superintendent/job-dashboard/JobsList"
import JobDetail from "@/components/superintendent/job-dashboard/JobDetail"

import { Job, ChecklistItemState, AdditionalChecklistItem } from "@/types/job-types"
import { MOCK_JOBS, PhaseTemplate } from "@/types/mock-jobs/mock-data"
import SelectPhaseTemplate from "@/components/superintendent/job-dashboard/SelectPhaseTemplate"
import PhaseChecklist from "@/components/superintendent/job-dashboard/PhaseChecklist"

type View = "list" | "detail" | "select-phase" | "checklist"

export default function JobDashboardPage() {
    const [view, setView] = useState<View>("list")
    const [selectedJob, setSelectedJob] = useState<Job | null>(null)
    const [selectedPhase, setSelectedPhase] = useState<PhaseTemplate | null>(null)

    function handleSelectJob(job: Job) {
        setSelectedJob(job)
        setView("detail")
    }

    function handleStartInspection() {
        setView("select-phase")
    }

    function handleLoadChecklist(phase: PhaseTemplate) {
        setSelectedPhase(phase)
        setView("checklist")
    }

    function handleSubmitAndLock(items: ChecklistItemState[], additionalItems: AdditionalChecklistItem[]) {
        // TODO: persist the locked inspection (items + additionalItems) for selectedJob/selectedPhase
        setView("detail")
    }

    function handleSaveDraft(items: ChecklistItemState[], additionalItems: AdditionalChecklistItem[]) {
        // TODO: persist the draft (items + additionalItems) for selectedJob/selectedPhase
        setView("detail")
    }

    return (
        <div className="min-h-screen bg-[#F7F4EF] p-4 text-[#111111] sm:p-6 lg:p-8">
            <div>
                {view === "list" && <JobsList jobs={MOCK_JOBS} onSelectJob={handleSelectJob} />}

                {view === "detail" && selectedJob && (
                    <JobDetail
                        job={selectedJob}
                        onBack={() => setView("list")}
                        onStartInspection={handleStartInspection}
                        onViewLockedInspection={() => {
                            // TODO: route to the locked, read-only inspection record for this phase
                        }}
                        onViewHistory={() => {
                            // TODO: route to the inspection history list for this job
                        }}
                    />
                )}

                {view === "select-phase" && selectedJob && (
                    <SelectPhaseTemplate job={selectedJob} onLoadChecklist={handleLoadChecklist} />
                )}

                {view === "checklist" && selectedJob && selectedPhase && (
                    <PhaseChecklist
                        job={selectedJob}
                        phase={selectedPhase}
                        onSubmitAndLock={handleSubmitAndLock}
                        onSaveDraft={handleSaveDraft}
                    />
                )}
            </div>
        </div>
    )
}