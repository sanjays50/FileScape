#include <iostream>
using namespace std;

class B;
class A{
    private:
    int a;
    public:
    A(){
        a=20;
    }
    friend int add(A a,B b);
};

class B{
    private:
    int b;
    public:
    B(){
        b=10;
    }
    friend int add(A a,B b);
};

int add(A a,B b){
    return a.a +b.b;
}

int main(){
    A a;
    B b;
    cout<<add(a,b);
}