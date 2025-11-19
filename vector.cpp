#include<bits/stdc++.h>
using namespace std;

void explainVector(){
    vector<int> v;
    v.push_back(1);
    v.push_back(3);
    v.push_back(5);
    v.push_back(7);

    cout << v[0] << " " << v[1] << endl;

    v.emplace_back(2);
    cout << v[4] << endl;

    //pair
    vector<pair<int,int>>vec;
    vec.push_back({3,4});
    vec.emplace_back(1,2);

    cout << vec[0].first << " for pushback " << vec[0].second << endl;
    cout << vec[1].first << " for emplace back " << vec[1].second << endl;

    vector<int> v1(5,20);
    vector<int> v2(4,34);

    vector<int>::iterator it = v1.begin();
    it++;
    cout << *(it) << " ";
    for(auto& p : v1){
        cout << p;
    }
    cout << endl;

    //v2
    for(auto& p: v2){
        cout << p << " ";
    }

    
}

int main(){

    explainVector();

    return 0;
}