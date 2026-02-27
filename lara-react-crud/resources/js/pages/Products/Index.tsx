import { Head, Link, usePage, useForm } from '@inertiajs/react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Megaphone } from 'lucide-react';

import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Products',
        href: '/products',
    },
];

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

interface PageProps {
    flash: {
        message?: string;
    };
    products: Product[];
}

export default function Index() {
    const { products, flash } = usePage().props as PageProps;
    const { processing, delete: destroy } = useForm();

    const handleDelete = (id: number, name: string) => {
        if (confirm(`Do you want to delete product - ${id}. ${name}?`)) {
            destroy(`/products/${id}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products" />

            {/* Add Product Button */}
            <div className="p-4 m-4">
                <Link href="/products/create">
                    <Button>Add Product</Button>
                </Link>
            </div>

            {/* Flash Message */}
            <div className="m-4">
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

            {/* Products Table */}
            {products.length > 0 ? (
                <div className="m-4">
                    <Table>
                        <TableCaption>A list of your recent products.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">ID</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead className="text-center">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {products.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell className="font-medium">
                                        {product.id}
                                    </TableCell>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell>{product.price}</TableCell>
                                    <TableCell>{product.description}</TableCell>
                                    <TableCell className="text-center space-x-2">
                                        
                                        {/* Edit Button */}
                                        <Link href={`/products/${product.id}/edit`}>
                                            <Button className="bg-slate-600 hover:bg-slate-700">
                                                Edit
                                            </Button>
                                        </Link>

                                        {/* Delete Button */}
                                        <Button
                                            onClick={() =>
                                                handleDelete(product.id, product.name)
                                            }
                                            disabled={processing}
                                            className="bg-red-500 hover:bg-red-700"
                                        >
                                            Delete
                                        </Button>
                                        <Button
                                            onClick={() =>
                                                handleDelete(product.id, product.name)
                                            }
                                            disabled={processing}
                                            className="bg-red-500 hover:bg-red-700"
                                        >
                                            Delete
                                        </Button>
                                        <Button
                                            onClick={() =>
                                                handleDelete(product.id, product.name)
                                            }
                                            disabled={processing}
                                            className="bg-red-500 hover:bg-red-700"
                                        >
                                            Delete
                                        </Button>
                                        <Button
                                            onClick={() =>
                                                handleDelete(product.id, product.name)
                                            }
                                            disabled={processing}
                                            className="bg-red-500 hover:bg-red-700"
                                        >
                                            Delete
                                        </Button>

                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            ) : (
                <div className="p-4 m-4">
                    <p>No products found</p>
                </div>
            )}
        </AppLayout>
    );
}