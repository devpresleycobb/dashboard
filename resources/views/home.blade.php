@extends('layouts.app')

@section('content')
    @include('frontend.header')
    <div class="mx-auto bg-primary">
        @include('frontend.navigation')
        @include('frontend.top-carousel')
        @include('frontend.emphasize-section')
        @include('frontend.middle-carousel')
        <section class="grid lg:grid-cols-3 grid-cols-2 w-4/5 mx-auto mt-10 gap-x-16">
            @include('frontend.by-category')
            @include('frontend.by-metric')
        </section>
        @include('frontend.footer')
</div>
@endsection
