<?php
  header('Content-Type: application/json');

  include "database.php";
  //creo la variabile $res di supporto per accedere alle informazioni "di legno"
  $res = [
    'fatturato' => $graphs['fatturato']
  ];
  //
  $fba = [
    'type' => $graphs['fatturato_by_agent']['type']
  ];

  $labels = [];
  $data = [];

  foreach ($graphs['fatturato_by_agent']['data'] as $name => $number) {
    $labels[] = $name;
    $data[] = $number;
  }

  $fba['labels'] = $labels;
  $fba['data'] = $data;
  $res['fatturato_by_agent'] = $fba;

  echo json_encode($res);
 ?>
