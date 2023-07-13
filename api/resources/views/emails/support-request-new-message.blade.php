<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>TEST</title>
</head>
<body>
<div>
    <h4>Received a response to the request #{{ $supportId }}</h4>
</div>
<div>
    <h4>Sender login</h4>
    {{ $login }}
</div>
<div>
    <h4>Response text</h4>
    {{ $messageText }}
</div>
</body>
</html>
