import { fetchCustomers } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import Form from '@/app/ui/invoices/create-form';

const breadcrumbs = [
    { label: 'Invoices', href: '/dashboard/invoices' },
    { label: 'Create', href: '/dashboard/invoices/create', active: true }
]
async function Page() {
    const customers = await fetchCustomers()
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={breadcrumbs}>
            </Breadcrumbs>
            <Form customers={customers}></Form>
        </main>
    );
}

export default Page;