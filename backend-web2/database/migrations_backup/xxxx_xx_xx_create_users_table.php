Schema::create('users', function (Blueprint $table) {
// ... kolom lainnya ...
$table->string('avatar')->nullable();
});