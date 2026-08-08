import EventDetailPage from "@/components/church/events/EventDetailPage";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <EventDetailPage eventId={id} />;
}
