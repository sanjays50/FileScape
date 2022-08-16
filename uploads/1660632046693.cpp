#include <bits/stdc++.h>

using namespace std;

const long long int mod = 1e9 + 7;
typedef long long int ll;
typedef long double ld;
#define vll vector<long long int>
#define vvll vector<vector<long long int>>
#define vpll vector<pair<ll, ll>>
#define fn(i, k, n) for (ll i = k; i < n; i++)
#define all(p) p.begin(), p.end()
ll inf = 1e15;
ll ans = 0;


long long int gcd(ll a,ll b){
    if(b==0){
        return a;
    }
    return gcd(b,a%b);
}


//logn

long long int powr(ll b, ll n)
{
    ll ans, a;
    if (n == 0 || b == 1)
    {
        return 1;
    }
    if (n % 2 == 0)
    {
        a = powr(b, n / 2);
        ans = (a * a);
    }
    else
    {
        a = powr(b, n - 1);
        ans = (a * b);
    }
    return ans;
}


// sqrt(n)


bool isprime(ll n){
    if(n<2){
        return false;
    }
    for(ll i=2;i*i<=n;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}


// nloglogn

vector<ll> sieve(ll n){
    vector<ll> v(n+1,1);
    v[0]=0;
    v[1]=0;
    for(ll i=2;i*i<=n;i++){
        if(v[i]==1){
            for(ll j=i*i;j<=n;j+=i){
                v[j]=0;
            }
        }
    }
    return v;
}

// sqrt(n)

ll primefactor(ll n){
    ll c=0;
    vector<ll> v;
    for(ll i=2;i*i<=n;i++){
        if(n%i==0){
            while(n%i==0){
                if(i%2==1){
                    c++;
                }
                n=n/i;
            }
        }
    }
    if(n>1 && n%2==1){
        c++;
    }
    return c;
}

void solve()
{
    ll x;
    cin>>x;
    if(x==1){
        cout<<3<<"\n";
    }
    else if(x%2==1){
        cout<<1<<"\n";
    }
    else{
        ll t=log2(x);
        if(powr(2,t)==x){
            cout<<x+1<<"\n";
        }
        else{
            ll y=1;
            while((x&1)==0){
                y*=2;
                x=x/2;
            }
            cout<<y<<"\n";
        }
    }
    
}

int main()
{
    cin.tie(NULL);
    ios_base::sync_with_stdio(false);
    int test = 1;
    cin >> test;
    while (test--)
    {
        solve();
    }
    return 0;
}