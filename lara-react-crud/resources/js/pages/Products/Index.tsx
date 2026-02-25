import { Head, Link, usePage } from '@inertiajs/react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CircleAlert } from 'lucide-react';

import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Megaphone } from 'lucide-react';




const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Products',
        href: '/products',
    },
];

interface PageProps {
    flash: {
        message?: string;
    };
}

export default function Index() {

    const { flash } = usePage().props as PageProps;



    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products" />
            <div className="p-4 m-4" >
               <Link href={'/products/create'}>

          <Button>Add Product</Button>

        </Link>

            </div>
            <div className='m-4'>
           <div>
            {flash.message && (
                <Alert>
                    <Megaphone className="h-4 w-4" />
                    <AlertTitle>Success</AlertTitle>
                    <AlertDescription>
                        {flash.message}
                    </AlertDescription>
                </Alert>
            )}
           </div>

            </div>
        
        </AppLayout>
    );
}

