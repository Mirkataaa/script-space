import { currentUser } from "@clerk/nextjs/server";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../convex/_generated/api";
import PremiumPlanViewComponent from "./_components/PremiumPlanViewComponent";

export default async function PricingPage () {

    const user = await currentUser();
    const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
    const convexUser = await convex.query(api.users.getUser , {
        userId: user?.id || ""
    });

    if (convexUser?.isPremium) {
        return <PremiumPlanViewComponent />
    }
    return (
        <div>hello from pricing</div>
    );
};