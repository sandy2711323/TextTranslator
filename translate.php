<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title></title>
</head>

<body>
    <?php
require_once('translate.class.php');

//$BingTranslator = new BingTranslator('<Application ID>', '<Application Secret>');
$BingTranslator = new BingTranslator('1684274a-92f4-4a0c-b932-99482dadf51a', '2eGe60XtmBXh4uxt54qjvB+PKiN2EkRBEUatJRfDblQ=');
$q = $_REQUEST["q"];
    if ($q !== "") {
    $translation = $BingTranslator->getTranslation('en', 'hi', $q);
}
    echo $translation;

?>
</body>

</html>