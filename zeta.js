//My implementation of Zeta function, will extend to all complex numbers later
function GammaReal(n)
{
	var s=1;
	for(var i=2;i<n;i++)
	{
		s*=i;
	}
	return s;
}
function ZetaReal(r,n)
{
	if(r>1)
	{
		var s=0;
		for(var x=1;x<=n;x++)
		{
			s+=Math.pow(x,-r);
		}
		return s;
	}else{
		return 2*Math.pow(2*Math.PI,r-1)*Math.sin(r*Math.PI/2)*GammaReal(1-s)*ZetaReal(1-r,n);
	}
}
//Created by Carter Feldman, Copyright 2014 -- You many not remove this message, but please use this code if you need it!
