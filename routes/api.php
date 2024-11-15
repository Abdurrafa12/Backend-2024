<?php

use App\Http\Controllers\HRDController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

route::get('/hrd', [HRDController::class, 'index']);
route::post('/hrd',[HRDController::class, 'store']);
