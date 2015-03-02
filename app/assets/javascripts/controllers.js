var calculatorCtrl = calculator.controller('calculatorCtrl', function($scope){
  
  // Display the value that is clicked on
  $scope.displayValue = '';
  $scope.answer = 0;
  $scope.mathstuff = '';

  // Set display value to a specific operator
  $scope.calculate = function(){
    if($scope.mathstuff === ''){
      $scope.answer = $scope.displayValue 
    }else if($scope.mathstuff === '+'){
      $scope.answer = Number($scope.displayValue) + Number($scope.answer);
    }else if($scope.mathstuff === '-'){
      $scope.answer = Number($scope.answer) - Number($scope.displayValue);
    }else if($scope.mathstuff === '/'){
      $scope.answer = Number($scope.answer) / Number($scope.displayValue);
    }else if($scope.mathstuff === '*'){
      $scope.answer = Number($scope.answer) * Number($scope.displayValue);
    };
  }

  
  // Add number to input
  $scope.newNumber = function(clickedNumber){
    // if number is clicked, add to input
    $scope.displayValue = $scope.displayValue + "" + clickedNumber

  }


// Clear number after clicking on + or - or / or *
  $scope.clearNumber = function(){
    $scope.displayValue = ""
  }


  // click "C" to clear displayValue
  $scope.reset = function(){
    $scope.displayValue = "";
    $scope.answer = 0;
    $scope.mathstuff = '';
  }


  // Add y to x
  $scope.addition = function(){
    $scope.calculate();
    $scope.clearNumber();
    $scope.mathstuff = '+'
  }


  // Subtract y from x
  $scope.subtraction = function() {
  $scope.calculate();
  $scope.clearNumber();
  $scope.mathstuff = '-'
}


  // Divide y from x
  $scope.divide =  function(){
    $scope.calculate();
    $scope.clearNumber();
    $scope.mathstuff = '/'
  }


  // Multiply y and x
  $scope.multiply = function() {
    $scope.calculate();
    $scope.clearNumber();
    $scope.mathstuff = '*'
  }


  // Display the value after addition or subtraction
  $scope.showTotal = function(){
    $scope.calculate();
    $scope.displayValue = $scope.answer
  }
});