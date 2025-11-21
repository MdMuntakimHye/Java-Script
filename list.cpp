#include<bits/stdc++.h>
using namespace std;

void explainList(){
    //list has front operations as well. 
    list<int> ls;

    ls.push_back(2); 
    ls.emplace_back(4);

    ls.push_front(5);
    ls.emplace_front(6);

    cout << "the list is " << endl;

    for(auto x:ls){
        cout << x << " ";
    }

    list<int> ls2 = {10,20,30};
    cout << endl;
    ls.insert(ls.begin(),ls2.begin(),ls2.end());
    for(auto x:ls){
        cout << x << " ";
    }
}

int main(){

    explainList();

    return 0;
}