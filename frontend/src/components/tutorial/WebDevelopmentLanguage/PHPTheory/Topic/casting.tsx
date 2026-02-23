const PhpCasting = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">PHP Casting</h1>

      <p>
        Sometimes you need to convert a variable from one data type to another.
        This process is called <b>casting</b>. PHP supports several casting
        statements to change type.
      </p>

      <h2 className="text-2xl font-semibold mt-4">Available Casting Types</h2>

      <ul className="list-disc ml-6">
        <li>(string) – Converts to String</li>
        <li>(int) – Converts to Integer</li>
        <li>(float) – Converts to Float</li>
        <li>(bool) – Converts to Boolean</li>
        <li>(array) – Converts to Array</li>
        <li>(object) – Converts to Object</li>
        <li>(unset) – Converts to NULL</li>
      </ul>

      {/* STRING CASTING */}
      <h2 className="text-2xl font-semibold">Cast to String</h2>
      <p>Using (string) to convert into a string:</p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`$a = 5;
$b = 5.34;
$c = "hello";
$d = true;
$e = NULL;

$a = (string) $a;
$b = (string) $b;
$c = (string) $c;
$d = (string) $d;
$e = (string) $e;

var_dump($a);
var_dump($b);
var_dump($c);
var_dump($d);
var_dump($e);`}
      </pre>

      {/* INTEGER CASTING */}
      <h2 className="text-2xl font-semibold">Cast to Integer</h2>
      <p>Using (int) to convert into an integer:</p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`$a = 5;
$b = 5.34;
$c = "25 kilometers";
$d = "kilometers 25";
$e = "hello";
$f = true;
$g = NULL;

$a = (int) $a;
$b = (int) $b;
$c = (int) $c;
$d = (int) $d;
$e = (int) $e;
$f = (int) $f;
$g = (int) $g;`}
      </pre>

      {/* FLOAT CASTING */}
      <h2 className="text-2xl font-semibold">Cast to Float</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`$a = 5;
$b = 5.34;
$c = "25 kilometers";
$d = "kilometers 25";
$e = "hello";
$f = true;
$g = NULL;

$a = (float) $a;
$b = (float) $b;
$c = (float) $c;
$d = (float) $d;
$e = (float) $e;
$f = (float) $f;
$g = (float) $g;`}
      </pre>

      {/* BOOLEAN CASTING */}
      <h2 className="text-2xl font-semibold">Cast to Boolean</h2>
      <p>
        Using (bool) to convert into Boolean.  
        0, NULL, empty string, and false become false — rest become true.
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`$a = 5;
$b = 5.34;
$c = 0;
$d = -1;
$e = 0.1;
$f = "hello";
$g = "";
$h = true;
$i = NULL;

$a = (bool) $a;
$b = (bool) $b;
$c = (bool) $c;
$d = (bool) $d;
$e = (bool) $e;
$f = (bool) $f;
$g = (bool) $g;
$h = (bool) $h;
$i = (bool) $i;`}
      </pre>

      {/* ARRAY CASTING */}
      <h2 className="text-2xl font-semibold">Cast to Array</h2>
      <p>Most values become a 1-item indexed array. NULL becomes an empty array.</p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`$a = 5;
$b = 5.34;
$c = "hello";
$d = true;
$e = NULL;

$a = (array) $a;
$b = (array) $b;
$c = (array) $c;
$d = (array) $d;
$e = (array) $e;`}
      </pre>

      <h2 className="text-2xl font-semibold">Objects to Arrays</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`class Car {
  public $color;
  public $model;

  public function __construct($color, $model) {
    $this->color = $color;
    $this->model = $model;
  }
}

$myCar = new Car("red", "Volvo");
$myCar = (array) $myCar;

var_dump($myCar);`}
      </pre>

      {/* OBJECT CASTING */}
      <h2 className="text-2xl font-semibold">Cast to Object</h2>
      <p>Most values become an object with property "scalar".</p>
      <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`$a = 5;
$b = 5.34;
$c = "hello";
$d = true;
$e = NULL;

$a = (object) $a;
$b = (object) $b;
$c = (object) $c;
$d = (object) $d;
$e = (object) $e;`}
      </pre>

      <h2 className="text-2xl font-semibold">Arrays to Objects</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`$a = array("Volvo", "BMW", "Toyota");
$b = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");

$a = (object) $a;
$b = (object) $b;`}
      </pre>

      {/* NULL CASTING */}
      <h2 className="text-2xl font-semibold">Cast to NULL</h2>
      <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`$a = 5;
$b = 5.34;
$c = "hello";
$d = true;
$e = NULL;

$a = (unset) $a;
$b = (unset) $b;
$c = (unset) $c;
$d = (unset) $d;
$e = (unset) $e;`}
      </pre>
    </div>
  );
};

export default PhpCasting;
