import validator from 'validator';

export function validEmail(email)
{
    var _IsValid=true;

    if(!validator.isEmail(email))
    {
        _IsValid=false;
    }

     return _IsValid;
}

export function validPassword(password)
{
    var _IsValid=true;

    if(!validator.isLength(password,{min:5}))
    {
        _IsValid=false;
    }

     return _IsValid;
}

export function validKilometer(kilometer)
{
    var _IsValid=true;

    if(!validator.isNumeric(kilometer))
    {
        _IsValid=false;
    }

     return _IsValid;
}

export function validMileage(mileage)
{
    var _IsValid=true;

    if(!validator.isNumeric(mileage))
    {
        _IsValid=false;
    }

     return _IsValid;
}

export function validYear(year)
{
    var _IsValid=true;

    if(!validator.isNumeric(year))
    {
        _IsValid=false;
    }

     return _IsValid;
}

export function validColour(colour)
{
    var _IsValid=true;

    if(!validator.isAlpha(colour) || colour=='')
    {
        _IsValid=false;
    }

     return _IsValid;
}

export function validEngine(engine)
{
    var _IsValid=true;

    if(engine=='')
    {
        _IsValid=false;
    }

     return _IsValid;
}

export function validSeater(seater)
{
    var _IsValid=true;

    if(!validator.isNumeric(seater))
    {
        _IsValid=false;
    }

     return _IsValid;
}

export function validPrice(price)
{
    var _IsValid=true;

    if(!validator.isDecimal(price))
    {
        _IsValid=false;
    }

     return _IsValid;
}

export function validName(name)
{
    var _IsValid=true;

    if(name=='')
    {
        _IsValid=false;
    }

     return _IsValid;
}

export function validCode(code)
{
    var _IsValid=true;

    if(code=='')
    {
        _IsValid=false;
    }

     return _IsValid;
}

export function validAddress(address)
{
    var _IsValid=true;

    if(address=='')
    {
        _IsValid=false;
    }

     return _IsValid;
}

export function validMobile(mobile)
{
    var _IsValid=true;

    if(!(validator.isNumeric(mobile)) || !(validator.isLength(mobile,{min:10,max:10})))
    {
        _IsValid=false;
    }

     return _IsValid;
}

