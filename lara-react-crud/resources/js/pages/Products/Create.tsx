import { Head, Link } from '@inertiajs/react';

import AppLayout from '@/layouts/app-layout';
import { Textarea } from "@/components/ui/textarea"
import type { BreadcrumbItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';




const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create a new product',
        href: '/products/create',
    },
];

export default function Index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create a new product" />
            <div className="w-8/12  p-4 m-4" >
                <form action="">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="col-span-2">
                            <Label htmlFor="product name" className="block text-sm font-medium text-gray-700">Name</Label>
                            <Input placeholder='prodcut name'  type="text" name="name" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                        </div>
                        <div className="col-span-2">
                            <Label htmlFor="product price" className="block text-sm font-medium text-gray-700">Price</Label>
                            <Input placeholder='prodcut price'  type="text" name="name" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                        </div>
                        <div className="col-span-2">
                            <Label htmlFor="product description" className="block text-sm font-medium text-gray-700">Description</Label>
                           <Textarea placeholder='prodcut description' />
                        </div>
                    </div>
                </form>
      
          {/* <Button>Add Product</Button> */}
        

            </div>
        </AppLayout>
    );
}

