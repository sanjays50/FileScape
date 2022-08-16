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
            c=0;
            while(n%i==0){
                if(i%2==1){
                    c++;
                }
                n=n/i;
            }
            v.push_back(c);
        }
    }
    if(n>1 && n%2==1){
        c++;
    }
    return c;
}
int binary(vector<int> v,int m){
    int i=0,j=v.size()-1,t=-1;
    while(i<=j){
        int mid=i+(j-i)/2;
        if(v[mid]>m){
            j=mid-1;
        }
        else{
            t=mid;
            i=mid+1;
        }
    }
    return t+1;
}

void solve()
{
    ll m;
    cin>>m;
    vvll v(2,vll(m));
    fn(i,0,m){
        cin>>v[0][i];
    }
     fn(i,0,m){
        cin>>v[1][i];
    }
    vvll v1(2,vll(m,0)),ans(2,vll(m,0));
    
   if(v[0][m-1]>=v[1][m-1]){
        v1[0][m-1]=1;
   }
   else{
        v1[0][m-1]=v[1][m-1]-v[0][m-1]+1;
   }
   if(v[1][m-1]>=v[0][m-1]){
        v1[1][m-1]=1;
   }
   else{
        v1[1][m-1]=v[0][m-1]-v[1][m-1]+1;
   }
    for(ll i=m-2;i>=0;i--){
        ll t=0;
        if(v[0][i]+1>=v[0][i+1]) t=1;
        else t=v[0][i+1]-v[0][i]+1;

        t+=v1[0][i+1];

        if(v[1][i+1]+1>=v[1][i]) t+=1;
        else t+=v[1][i]-v[1][i+1]+1;

        v1[0][i]=t;
        t=0;

        if(v[1][i]+1>=v[1][i+1]) t=1;
        else t=v[1][i+1]-v[1][i]+1;

        t+=v1[1][i+1];
        if(v[0][i+1]+1>=v[0][i]){
            t+=1;
        }
        else{
            t+=v[0][i]-v[0][i+1]+1;
        }
        v1[1][i]=t;
    }
    ans[0][m-1]=v1[0][m-1];
    ans[1][m-1]=v1[1][m-1];
    for(ll i=m-2;i>=0;i--){
        ll t=0;
        if(v[0][i]+1>=v[1][i]){
            t=1;
        }
        else{
            t=v[1][i]-v[0][i]+1;
        }
        if(v[1][i]+1>=v[1][i+1]){
            t+=1;
        }
        else{
            t+=v[1][i+1]-v[1][i]+1;
        }
        ans[0][i]=min(t+ans[1][i+1],v1[0][i]);
        t=0;
        if(v[1][i]+1>=v[0][i]){
            t=1;
        }
        else{
            t=v[0][i]-v[1][i]+1;
        }
        if(v[0][i]+1>=v[0][i+1]){
            t+=1;
        }
        else{
            t+=v[0][i+1]-v[0][i]+1;
        }
        ans[1][i]=min(t+ans[0][i+1],v1[1][i]);
    }
    cout<<ans[0][0]<<"\n";
    // fn(i,0,m)cout<<v1[0][i]<<" ";
    // cout<<"\n";
    // fn(i,0,m)cout<<v1[1][i]<<" ";
    // cout<<"\n";
    // fn(i,0,m)cout<<ans[0][i]<<" ";
    // cout<<"\n";
    // fn(i,0,m)cout<<ans[1][i]<<" ";
    // cout<<"\n";
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