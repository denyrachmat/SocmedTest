<?php
 
namespace App;
 
use Illuminate\Database\Eloquent\Model;
 
class Costumer extends Model
{
    protected $table = 'costumer';
    protected $fillable = [
        'FirstName',
		'LastName',
		'DOB',
		'Gender',
		'Email',
		'Phone',
		'CompanyName'
    ];
}