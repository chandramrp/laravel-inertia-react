<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    /**
     * The application's global HTTP middleware stack.
     *
     * These middleware may be assigned to groups or used individually.
     *
     * @var array<int, class-string|string>
     */
    protected $middleware = [
        // ... middleware lainnya
        \App\Http\Middleware\HandleInertiaRequests::class,
        \Fruitcake\Cors\HandleCors::class,
    ];

    /**
     * The application's route middleware groups.
     *
     * @var array<string, array<int, class-string|string>>
     */
    protected $middlewareGroups = [
        'web' => [
            // ... middleware lainnya
            \App\Http\Middleware\HandleInertiaRequests::class,
        ],
    ];

    /**
     * The application's route middleware.
     *
     * These middleware may be assigned to groups or used individually.
     *
     * @var array<string, class-string|string>
     */
    protected $routeMiddleware = [
        // ... route middleware lainnya
    ];
} 