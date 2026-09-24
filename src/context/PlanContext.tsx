"use client";

import {
    createContext,
    useContext,
    useState,
    type ReactNode,
} from "react";

import type { Workout, Tab } from "@/lib/types";
import toast from "react-hot-toast";

const PlanContext = createContext<any>(null);

const PlanProvider = ({ children }: { children: ReactNode }) => {

    const [plan, setPlan] = useState<Workout[]>([]);
    const [saved, setSaved] = useState<Workout[]>([]);
    const [tab, setTab] = useState<Tab>("plan");

    const addToPlan = (workout: Workout) => {
        if (plan.some((item) => item.id === workout.id)) {
            toast("❌ Already in today's plan");
            return;
        }

        if (plan.length >= 5) {
            toast.error("Plan is full");
            return;
        }

        setPlan([
            ...plan,
            {
                ...workout,
                done: false,
            },
        ]);

        toast.success("Workout added");
    };

    const saveForLater = (workout: Workout) => {
        if (saved.some((item) => item.id === workout.id)) {
            toast("❌ Already saved");
            return;
        }

        setSaved([...saved, workout]);

        toast.success("Saved for later");
    };

    const removeItem = (list: Tab, id: Workout["id"]) => {

        if (list === "plan") {
            setPlan(
                plan.filter((item) => item.id !== id)
            );
        } else {
            setSaved(
                saved.filter((item) => item.id !== id)
            );
        }

        toast.success("Workout removed");
    };

    const markDone = (id: Workout["id"]) => {
        setPlan(
            plan.map((item) =>
                item.id === id
                    ? { ...item, done: true }
                    : item
            )
        );

        toast.success("Workout completed");
    };

    return (
        <PlanContext.Provider
            value={{
                plan,
                saved,
                addToPlan,
                saveForLater,
                removeItem,
                markDone,
                tab,
                setTab,
                isPlanFull: plan.length >= 5,
            }}
        >
            {children}
        </PlanContext.Provider>
    );
};

export const usePlan = () => {
    const context = useContext(PlanContext);

    if (!context) {
        throw new Error(
            "usePlan must be used inside PlanProvider"
        );
    }

    return context;
};

export default PlanProvider;